"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");
const { Webpack } = require("@embroider/webpack");
const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

class FileConcatenationPlugin {
  constructor(options) {
    this.options = {
      deleteSourceFiles: false,
      appendToDestination: false,
      ...options,
    };
  }

  apply(compiler) {
    let webpackOutputPath = compiler.options.output.path;
    this.destinationFilePath = path.join(
      webpackOutputPath,
      this.options.destination,
    );
    this.sourceFilesGlob = path.join(webpackOutputPath, this.options.source);

    compiler.hooks.done.tapPromise(
      "FileConcatenationPlugin",
      this.run.bind(this),
    );
  }

  async run(_compilation) {
    let inputFiles = await this.performGlobSearch(this.sourceFilesGlob);
    let filteredFiles = inputFiles
      .filter((a) => a.includes("vendor") || a.includes("ember-todo"))
      .sort((a) => {
        if (a.includes("vendor")) {
          return -1;
        }
        return 0;
      });
    
    console.log(filteredFiles);
    let allInputFileContents = "";
    for (let inputFilePath of filteredFiles) {
      let inputFileContents = await fs.readFile(inputFilePath);
      allInputFileContents += inputFileContents;

      if (this.options.deleteSourceFiles) {
        await fs.remove(inputFilePath);
      }
      allInputFileContents += '\n';
      
      allInputFileContents += `// ${inputFilePath}`;
      
      allInputFileContents += '\n';
    }

    if (this.options.appendToDestination) {
      await fs.appendFile(this.destinationFilePath, allInputFileContents);
    } else {
      await fs.writeFile(this.destinationFilePath, allInputFileContents);
    }
  }

  performGlobSearch(globStr) {
    return new Promise((resolve) => {
      glob(globStr, null, function (er, files) {
        resolve(files);
      });
    });
  }
}

// Doesn't contain a protocol
const VERCEL_PATH = process.env.VERCEL_URL;
const ASSET_PATH = process.env.ASSET_PATH ||
  (VERCEL_PATH && `https://${VERCEL_PATH}/`) || "/";

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    storeConfigInMeta: false,
  });

  return require("@embroider/compat").compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    packagerOptions: {
      skipBabel: [{ package: "qunit" }],
      webpackConfig: {
        mode: "production",
        optimization: {
          splitChunks: {
            chunks() {
              return false;
            },
          },
        },
        output: {
          assetModuleFilename: "[name]",
          asyncChunks: false,
          chunkFilename: "[name]",
          filename: "[name]",
          publicPath: ASSET_PATH,
        },
        plugins: [
          new FileConcatenationPlugin({
            source: "**/*.js",
            destination: "bundle.js",
          }),
          new MiniCssExtractPlugin({
            filename: "[name].css",
          }),
        ],
      },
    },
  });
};
