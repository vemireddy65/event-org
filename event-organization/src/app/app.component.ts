import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-organization';

  constructor(
    @Inject(DOCUMENT) document: Document
  ){

  }


  click(){
    let themeToggler = document.querySelector('.theme-toggler');
    let toggleBtn = document.querySelector('.toggle-btn');

    themeToggler?.classList.toggle('active');

   


  }

  onclick  () {
  
    document.querySelectorAll<HTMLElement>('.theme-toggler .theme-btn').forEach(btn =>{
      btn.onclick = ()=>{
         let color = btn.style.background;
      (<HTMLElement>document.querySelector(':root')).style.setProperty('--main-color', color);
      }
     
    
    });
  }
}
