import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'; // Import cell rendering components
import { ICellRendererParams } from 'ag-grid-community';  // Import cell rendering parameters
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-photo',
  template: `
    <span *ngIf="data.title=='Mr' && data.studentId != 0">
      <img src="https://cdn5.f-cdn.com/contestentries/108571/238467/5423194e2c03d_thumb900.jpg" alt="Wizard" style="width:40px; height:50px; margin-top:10px;">
    </span>  
    <span *ngIf="data.title=='Miss' && data.studentId != 0">
      <img src="https://img.freepik.com/free-vector/cute-young-witch-cartoon-character_1308-47284.jpg?w=360&t=st=1688639058~exp=1688639658~hmac=6a07b3980bdbfe5ac3b5571876ec523638ace3013df579f8559329c991ce42aa" alt="Witch" style="width:30px; height:50px; margin-top:10px;">
    </span> 
    <span *ngIf="data.studentId == 0">
      <img src="https://www.pngplay.com/wp-content/uploads/8/Wizard-Vector-PNG-Clipart-Background.png"  alt="Wizard" style="width:50px; height:60px; margin-top:10px;">
    </span> 
  `,
  styles: [
  ]
})
export class CharacterPhotoComponent implements OnInit, ICellRendererAngularComp{
  
  data: any;

  // get table timestamp row data
  agInit(params: any): void {
    this.data = params.data || null;
  }

  refresh(): boolean {
    return true;
  }

  constructor(
    private router: Router){}


  ngOnInit(): void {
  }

}
