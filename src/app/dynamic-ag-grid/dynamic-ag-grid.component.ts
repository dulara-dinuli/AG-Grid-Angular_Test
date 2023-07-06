import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';


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

  rowData= [];

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
}
