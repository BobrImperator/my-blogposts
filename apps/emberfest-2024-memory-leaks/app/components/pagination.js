import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PaginationComponent extends Component {
  // Set the page size to 30
  pageSize = 30;

  // Track the current page number, starting from 1
  @tracked currentPage = 1;

  // Get the total number of pages
  get totalPages() {
    return Math.ceil(this.args.records.length / this.pageSize);
  }

  // Get the records for the current page
  get paginatedRecords() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.args.records.slice(startIndex, endIndex);
  }

  // Action to move to the next page
  @action
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }

  // Action to move to the previous page
  @action
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  // Action to move to a specific page
  @action
  goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
}

