import { MatTableDataSource } from '@angular/material/table';

export function commonSearches<T>(
  dataSource: MatTableDataSource<T>,
  searchValue: string
): T[] {
  const text = searchValue.trim().toLowerCase();
  dataSource.filter = text;
  return dataSource.filteredData;
}
