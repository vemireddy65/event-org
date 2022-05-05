import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var swiper = new Swiper(".review-slider", {
      slidesPerView: 1,
      grabCursor: true,
      loop:true,
      spaceBetween: 10,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 3,
        },    
      },
      autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    }
  });
  }

}
