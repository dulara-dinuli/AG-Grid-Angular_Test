import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi,GridReadyEvent, RowClassParams, RowStyle, ValueGetterParams} from 'ag-grid-community';
import { CharacterPhotoComponent } from '../character-photo/character-photo.component';

@Component({
  selector: 'app-customized-cr-ag-grid',
  templateUrl: './customized-cr-ag-grid.component.html',
  styleUrls: ['./customized-cr-ag-grid.component.css']
})
export class CustomizedCRAGGridComponent {

  // Defining columns using AG Grid
  public columnDefs = [
    {headerName: 'Index', field: 'studentId', cellStyle: {textAlign: 'center'}, flex:2},
    {headerName: 'Full Name', valueGetter: concatName, flex:2},
    {headerName: 'Email', field: 'email', flex:2},
    {headerName: 'Title', field: 'title', flex:2, hide:true},
    {headerName: 'Gender', field: 'gender', cellRenderer: CharacterPhotoComponent, 
    cellRendererParams: { data: this }, cellStyle: {textAlign: 'center'}, flex:3
  }  // Rendering More-Info drop down list
  ];

  private gridApi!: GridApi;

  rowData! : any [];
  rowHeight = 80;
  paginationPageSize = 6;

  constructor() { }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; //Getting parameters through Grid API
  }

  ngOnInit(){
    fetch('https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/employeeData.json')  //Fetch data through the JSON data file
        .then(result => result.json())
        .then(rowData => this.rowData = rowData);
  }

  getRowStyle(params: RowClassParams<any>): RowStyle | undefined {
    if (params.node.data.title === 'Mr') {
      return { color: 'rgba(0, 9, 49, 0.69)', fontWeight: 'bold', fontFamily: 'Times New Roman'};
    }
    else if (params.node.data.title === 'Miss') {
      return { color: 'rgba(12, 49, 0, 0.734)',  fontWeight: '500' };
    }
    return undefined;
  }

  addNewRow() {
    const newRowData = { studentId: 0, firstName: 'New', lastName: 'Student', email: 'newstudent@gmail.com', title: 'Mr' };
    this.rowData.push(newRowData);
    this.gridApi.setRowData(this.rowData);
  }

}

function concatName(params: ValueGetterParams) {
  return params.data.firstName +' '+ params.data.lastName;
}



