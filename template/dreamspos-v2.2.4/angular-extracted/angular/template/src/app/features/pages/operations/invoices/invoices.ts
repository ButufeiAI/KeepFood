import { Component, effect, signal, ViewChild, WritableSignal } from '@angular/core';
import { CustomPagination } from '../../../../shared/custom-pagination/custom-pagination';
import { routes } from '../../../../core/routes/routes';
import { invoice, apiResultFormat } from '../../../../core/models/model';
import {
  pageSelection,
  PaginationService,
  tablePageSize,
} from '../../../../shared/custom-pagination/pagination.service';
import { DataService } from '../../../../core/services/data/data.service';
import { Router } from '@angular/router';
import { CommonSearch } from '../../../../shared/common-search/common-search';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FilterDaterangepicker } from '../../../../shared/filter-daterangepicker/filter-daterangepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-invoices',
  imports: [
    CustomPagination,
    CommonSearch,
    MatSortModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    DatePickerModule,
    FilterDaterangepicker,
    DragDropModule
  ],
  templateUrl: './invoices.html',
  styleUrl: './invoices.scss',
})
export class Invoices {
  AllRoutes = routes
  dates:string[]=[]
  // Signals for reactive state
   @ViewChild(MatSort) sort!: MatSort;
  tableData = signal<invoice[]>([]);
  tableDataCopy = signal<invoice[]>([]);
  allData: WritableSignal<invoice[]> = signal([]);
  totalData = signal(0);
  currentPage = signal(1);
  pageSize = signal(10);
  totalPages = signal(0);
  pageSelection = signal<pageSelection[]>([]);
  pageNumberArray = signal<number[]>([]);
  serialNumberArray = signal<number[]>([]);
  constructor(private data: DataService,private router:Router,private pagination: PaginationService) {
    // Effect to rebuild page selection when totalData or pageSize changes
    
    effect(() => {
      const total = this.totalData();
      const size = this.pageSize();
    });
  }

  // Fetch JSON and load first page
  loadTableData(): void {
     this.data.getInvoice().subscribe((res: apiResultFormat) => {
    // Add serial numbers
    const tableWithSNo = res.data.map((c:any, i:any) => ({ ...c, sNo: i + 1 }));
    this.tableData.set(tableWithSNo);  // <-- must use .set()
    
    // Update pagination
    this.totalData.set(res.totalData);

   
  });
  }
private getTableData(pageOption: pageSelection): void {
  this.data.getInvoice().subscribe((apiRes: apiResultFormat) => {

    const pagedTable: invoice[] = [];
    const pagedCopy: invoice[] = [];
    const serials: number[] = [];

    apiRes.data.forEach((res: invoice, index: number) => {
      const serialNumber = index + 1;

      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        pagedTable.push(res);
        pagedCopy.push(res);
        serials.push(serialNumber);
      }
    });

    // ✅ Set signals instead of mutating arrays
    this.tableData.set(pagedTable);
    this.tableDataCopy.set(pagedCopy);
    this.serialNumberArray.set(serials);
    this.totalData.set(apiRes.totalData);

    // Update pagination
    this.pagination.calculatePageSize.next({
      totalData: this.totalData(),
      pageSize: this.pageSize(),
      tableData: this.tableData(),
      serialNumberArray: this.serialNumberArray(),
    });
  });
}
updateTable(event: {
  tableData: any[];
  serialNumberArray: number[];
  totalData: number;
}) {
  this.tableData.set(event.tableData);
  this.serialNumberArray.set(event.serialNumberArray);
  this.totalData.set(event.totalData);

  // Recalculate pagination
  this.pagination.calculatePageSize.next({
    totalData: event.totalData,
    pageSize: this.pageSize(),
    tableData: event.tableData,
    serialNumberArray: event.serialNumberArray,
  });
}
//Table Sorting
 sortData(sort: Sort ) {
  const data = [...this.tableData()]; // read the signal value

  if (!sort.active || sort.direction === '') {
    this.tableData.set(data); // ✅ update signal
  } else {
    const sorted = data.sort((a, b) => {
      const aValue = (a as any)[sort.active];
      const bValue = (b as any)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    });

    this.tableData.set(sorted); // ✅ update signal
  }
}
ngOnInit() {
  this.loadTableData();
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
    if (this.router.url === this.AllRoutes.invoices) {
      this.pageSize.set(res.pageSize);
      this.getTableData({ skip: res.skip, limit: res.limit });
    }
  });
}
selectedRowToDelete = signal<any | null>(null);

deleteData(row: any): void {
  this.selectedRowToDelete.set(row);
}

confirmDeleteData(): void {
  const row = this.selectedRowToDelete();
  if (!row) return;

  //  Remove from full data
  const updatedAll = this.tableDataCopy()
    .filter(item => item.id !== row.id);

  this.tableDataCopy.set(updatedAll);

  //  Update total count
  this.totalData.set(updatedAll.length);

  //  Fix current page if last row deleted
  const totalPages = Math.ceil(this.totalData() / this.pageSize());
  if (this.currentPage() > totalPages) {
    this.currentPage.set(totalPages || 1);
  }

  //  Recalculate page slice
  const start = (this.currentPage() - 1) * this.pageSize();
  const end = start + this.pageSize();

  const pageData = updatedAll.slice(start, end).map((item, index) => ({
    ...item,
    sNo: start + index + 1
  }));

  //  Update table
  this.tableData.set(pageData);

  //  Clear selected row
  this.selectedRowToDelete.set(null);
}



}
