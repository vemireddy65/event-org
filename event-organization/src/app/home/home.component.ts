import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".home-slider", {
      loop:true,
      speed:1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
   
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 1,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
           

     
   
    });
  }

}
