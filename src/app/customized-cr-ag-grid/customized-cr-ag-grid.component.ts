import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, GridApi,GridReadyEvent, RowClassParams, RowStyle, ValueGetterParams} from 'ag-grid-community';
import { CharacterPhotoComponent } from '../character-photo/character-photo.component';

@Component({
  selector: 'app-customized-cr-ag-grid',
  templateUrl: './customized-cr-ag-grid.component.html',
  styleUrls: ['./customized-cr-ag-grid.component.css']
})
export class CustomizedCRAGGridComponent {

  public isColumnVisible = false;

  // Defining columns using AG Grid
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {headerName: 'Index', field: 'studentId', cellStyle: {textAlign: 'center'}, flex:1},
    {headerName: 'Full Name', valueGetter: concatName, flex:2},
    {headerName: 'More Info', field: 'moreInfo', flex:3, suppressSizeToFit: true, 
      children: [
        {headerName: 'Address', field: 'address', resizable: true,  hide: !this.isColumnVisible},
        {headerName: 'Contact', field: 'contactNo', hide: !this.isColumnVisible},
      ]},
    {headerName: 'Email', field: 'email', flex:2},
    {headerName: 'Title', field: 'title', flex:2, hide: !this.isColumnVisible},
    {headerName: 'Gender', field: 'gender', cellRenderer: CharacterPhotoComponent, 
    cellRendererParams: { data: this }, cellStyle: {textAlign: 'center'}, flex:2
  }  // Rendering More-Info drop down list
  ];

  private gridApi!: GridApi;

  rowData! : any [];
  rowHeight = 80;
  paginationPageSize = 6;

  constructor() { }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; //Getting parameters through Grid API
    this.gridApi.setGroupHeaderHeight(0);
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
    const newRowData = { studentId: 0, firstName: 'New', lastName: 'Student', email: 'newstudent@gmail.com', title: 'Mr/ Miss', address: 'New Address', contactNo: '044 #######' };
    this.rowData.push(newRowData);
    this.gridApi.setRowData(this.rowData);
  }

  toggleColumnVisibility() {
    this.isColumnVisible = !this.isColumnVisible;
  
    this.columnDefs.forEach((colDef: any) => {
      if (colDef.headerName === 'More Info') {

        colDef.children.forEach((child: any) => {
          child.hide = !this.isColumnVisible;
        });

        if(this.isColumnVisible == true){
          this.gridApi.setGroupHeaderHeight(45);
          document.getElementById('icon')!.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        }
        else if(this.isColumnVisible == false){
          this.gridApi.setGroupHeaderHeight(0);
          document.getElementById('icon')!.innerHTML = '<i class="fa-solid fa-eye"></i>';
        } 
      }
    });
  
    this.gridApi.setColumnDefs(this.columnDefs);
  }

}

function concatName(params: ValueGetterParams) {
  return params.data.firstName +' '+ params.data.lastName;
}



