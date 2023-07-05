import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridReadyEvent, PaginationNumberFormatterParams } from 'ag-grid-community';


@Component({
  selector: 'app-dynamic-ag-grid',
  templateUrl: './dynamic-ag-grid.component.html',
  styleUrls: ['./dynamic-ag-grid.component.css']
})
export class DynamicAGGridComponent {
  columnDefs = [
    {headerName: 'Index', field: 'studentId', flex: 2},
    {headerName: 'First Name', field: 'firstName', flex: 3},
    {headerName: 'Last Name', field: 'lastName', flex: 3},
    {headerName: 'E-mail', field: 'email', flex: 3}
  ];

  private gridApi!: GridApi;
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; //Getting parameters through Grid API
  }

  rowData= [];
  rowHeight = 50;
  paginationPageSize = 5;

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    fetch('https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/employeeData.json')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);

    // Fetch the JSON files data using Angular HttpClient module
    // this.http.get<any>('https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/employeeData.json')
    //   .subscribe(
    //     data => {
    //       // Handle the received data here
    //       this.rowData = data;
    //     });
  }

  defaultColDef = {
    sortable: true,
    filter: true,
    unSortIcon: true,
    suppressMovable:true,
  };

  public paginationNumberFormatter: (
    params: PaginationNumberFormatterParams
  ) => string = (params: PaginationNumberFormatterParams) => {
    return '[' + params.value.toLocaleString() + ']';
  };
  
  onPageSizeChanged() {
    var value = (document.getElementById('pageSize') as HTMLInputElement).value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  // Method to change the table data according to the search bar inputs
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('searchFeature') as HTMLInputElement).value
    );
  }
}
