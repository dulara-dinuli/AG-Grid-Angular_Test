import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  handPointVisible(gridType: string){
    const element = document.getElementById(gridType);
    const allElements = document.getElementsByClassName("fa-hand-point-down");

    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i] as HTMLElement;
      element.style.display = "none";
    }

    if(element){
    element.style.display ="block";
    }
  }
}
