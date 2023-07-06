import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-static-ag-grid',
  templateUrl: './static-ag-grid.component.html',
  styleUrls: ['./static-ag-grid.component.css']
})
export class StaticAGGridComponent {

  columnDefs: ColDef[] = [
    { field: 'Rank', flex: 2, cellStyle: {textAlign: 'center'}},
    { field: 'Movie', flex: 2},
    { field: 'Director', flex: 2}
];

rowData = [
    { Rank: '1', Movie: 'Avatar', Director: 'James Cameron' },
    { Rank: '2', Movie: 'Avengers: Endgame', Director: 'Russo brothers' },
    { Rank: '3', Movie: 'Avatar: The Way of Water', Director: 'James Cameron' },
    { Rank: '4', Movie: 'Titanic', Director: 'James Cameron' },
    { Rank: '5', Movie: 'Star Wars: Episode VII - The Force Awakens', Director: 'J.J. Abrams' },
    { Rank: '6', Movie: 'Avengers: Infinity War', Director: 'Russo brothers' },
    { Rank: '7', Movie: 'Spider-Man: No Way Home', Director: 'Jon Watts' },
    { Rank: '8', Movie: 'Jurassic World', Director: 'Colin Trevorrow' },
    { Rank: '9', Movie: 'The Lion King', Director: 'Jon Favreau' },
    { Rank: '10', Movie: 'The Avengers', Director: 'Joss Whedon' }
];

}
