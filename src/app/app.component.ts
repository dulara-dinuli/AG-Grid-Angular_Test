import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  columnDefs = [
    {headerName: 'Index', field: 'studentId', flex: 2},
    {headerName: 'First Name', field: 'firstName', flex: 3},
    {headerName: 'Last Name', field: 'lastName', flex: 3},
    {headerName: 'E-mail', field: 'email', flex: 3}
  ];

  rowData= [];
  rowHeight = 50;
  paginationPageSize = 5;

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    fetch('https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/employeeData.json')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);

    // Fetch the JSON files data using Angular HttpClient module
    // this.http.get<any>('https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/employeeData.json')
    //   .subscribe(
    //     data => {
    //       // Handle the received data here
    //       this.rowData = data;
    //     });
  }

  defaultColDef = {
    sortable: true,
    filter: true,
    unSortIcon: true
  };
  
}