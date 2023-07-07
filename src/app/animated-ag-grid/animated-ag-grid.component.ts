import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';


@Component({
  selector: 'app-animated-ag-grid',
  templateUrl: './animated-ag-grid.component.html',
  styleUrls: ['./animated-ag-grid.component.css']
})
export class AnimatedAGGridComponent {

  columnDefs: ColDef[] =[
    {headerName: 'Index', field: 'studentId', flex: 2},
    {headerName: 'First Name', field: 'firstName', flex: 3},
    {headerName: 'Last Name', field: 'lastName', flex: 3},
    {headerName: 'E-mail', field: 'email', flex: 3}
  ];

  rowData = [];

  defaultColDef= {
    sortable: true,
    filter: true,
  };


  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    fetch('https://raw.githubusercontent.com/dulara-dinuli/AG-Grid-Angular_Test/main/Dynamic%20Json%20Data/employeeData.json')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }

  onGridReady(params: GridReadyEvent) {
    startInterval(params.api!, params.columnApi!);
  }
}

var countDownDirection = true;

function startInterval(api: GridApi, columnApi: ColumnApi) {
  var actionIndex = 0;
  resetCountdown();
  executeAfterXSeconds();
  function executeAfterXSeconds() {
    setTimeout(function () {
      var action = getActions()[actionIndex];
      action(api, columnApi);
      actionIndex++;
      if (actionIndex >= getActions().length) {
        actionIndex = 0;
      }
      resetCountdown();
      executeAfterXSeconds();
    }, 3000);
  }
  setTitleFormatted(null);
}
function resetCountdown() {
  (document.querySelector(
    '#animationCountdown'
  ) as any).style.width = countDownDirection ? '100%' : '0%';
  countDownDirection = !countDownDirection;
}
function setTitleFormatted(
  apiName: null | string,
  methodName?: string,
  paramsName?: string
) {
  var html;
  if (apiName === null) {
    html = `<span style="color: #700000;">Command:> </span>`;
  } else {
    html =
      '<span style="color: #700000;">Command:> </span> ' +
      '<span style="color: #00002e;">' +
      methodName + 
      '</span>' +
      '<span style="color: #00002e;"> ( </span>' +
      '<span style="color: #003c0c;">' +
      paramsName +
      '</span>' +
      '<span style="color: #00002e;"> )</span>';
  }
  document.querySelector('#animationAction')!.innerHTML = html;
}
function getActions() {
  return [
    function (api: GridApi, columnApi: ColumnApi) {
      columnApi.applyColumnState({
        state: [{ colId: 'firstName', sort: 'asc' }],
        defaultState: { sort: null },
      });
      setTitleFormatted('api', 'Column State', "First Name: 'asc'"
      );
    },
    function (api: GridApi, columnApi: ColumnApi) {
      columnApi.applyColumnState({
        state: [
          { colId: 'lastName', sort: 'asc' },
        ],
        defaultState: { sort: null },
      });
      setTitleFormatted(
        'api', 'Column State', "Last Name: 'asc'"
      );
    },
    function (api: GridApi, columnApi: ColumnApi) {
      columnApi.applyColumnState({
        state: [
          { colId: 'email', sort: 'desc' },
        ],
        defaultState: { sort: null },
      });
      setTitleFormatted(
        'api', 'Column State', "Email: 'desc'"
      );
    },
    function (api: GridApi, columnApi: ColumnApi) {
      columnApi.applyColumnState({
        defaultState: { sort: null },
      });
      setTitleFormatted('api', 'Columnn State', 'clear sort'
      );
    },
  ];

}
