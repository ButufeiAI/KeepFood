import { Component, effect, signal, ViewChild, WritableSignal } from '@angular/core';
import { CustomPagination } from '../../../../../shared/custom-pagination/custom-pagination';
import { routes } from '../../../../../core/routes/routes';
import { reports, apiResultFormat } from '../../../../../core/models/model';
import {
  pageSelection,
  PaginationService,
  tablePageSize,
} from '../../../../../shared/custom-pagination/pagination.service';
import { DataService } from '../../../../../core/services/data/data.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonSearch } from '../../../../../shared/common-search/common-search';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-sales-report',
   imports: [
    CustomPagination,
    CommonSearch,
    MatSortModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    DatePickerModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sales-report.html',
  styleUrl: './sales-report.scss',
})
export class SalesReport {
  AllRoutes = routes
  dates:string[]=[]
  // Signals for reactive state
   @ViewChild(MatSort) sort!: MatSort;
  tableData = signal<reports[]>([]);
  tableDataCopy = signal<reports[]>([]);
  allData: WritableSignal<reports[]> = signal([]);
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
     this.data.getSalesReport().subscribe((res: apiResultFormat) => {
    // Add serial numbers
    const tableWithSNo = res.data.map((c:any, i:any) => ({ ...c, sNo: i + 1 }));
    this.tableData.set(tableWithSNo);  // <-- must use .set()
    
    // Update pagination
    this.totalData.set(res.totalData);

   
  });
  }
private getTableData(pageOption: pageSelection): void {
  this.data.getSalesReport().subscribe((apiRes: apiResultFormat) => {

    const pagedTable: reports[] = [];
    const pagedCopy: reports[] = [];
    const serials: number[] = [];

    apiRes.data.forEach((res: reports, index: number) => {
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
  tableDataCopy: any[];
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
    if (this.router.url === this.AllRoutes.salesReport) {
      this.pageSize.set(res.pageSize);
      this.getTableData({ skip: res.skip, limit: res.limit });
    }
  });
}
}
