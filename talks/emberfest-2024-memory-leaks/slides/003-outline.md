# Outline

1. Preparing environment
<!-- Ember has Debug code that can sometimes do funky stuff. It's recommended to have a production build with terser configured so it preserves the original object names. -->
2. What are the objects and their retainers
<!-- Brief introduction to types of data found in a snapshot e.g. regular property like 'parent' and 'context in' like here https://github.com/ember-best-practices/memory-leak-examples/blob/master/exercises/images/exercise-3/finding-the-scope-leak.gif  -->
3. What to look for
<!-- Inspecting a snapshot can be overwhelming. In a browser environment, in my opinion, your first check should be for the classses that you own yourself, such as component, model, and anything that you defined as `class SomeComponent ...` -->
<!-- Because these classes bear actual names, they make the debugging much easier. -->
<!-- Another type of information to look for would be DOM elements that are in Detached stated. In a snapshot they appear as `Detached HTMLSpanElement` -->
<!-- I'll jump ahead and say that this is probably where most of the leaked memory will come from. -->
4. Iterating quickly
<!-- There's no real silver bullet to dealing with a memory leak and finding them might be a gruelsome experience. -->
<!-- You can make this much faster by leveraging your test environment e.g. rendering pages or components in a loop to quickly bloat up the memory to expose the leaking parts. -->
5. Divide and conquer
<!-- Brute forcing seems to be a good way to go about it. Once you've confirmed that a leak appears on one of your routes and not the others. Just start by disabling parts of the UI. -->
6. Testing?
<!-- #create a plug for the 4. iterating quickly. With this tool iterating would be much faster. -->
