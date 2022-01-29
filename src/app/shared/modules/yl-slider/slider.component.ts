import { Component, OnDestroy, OnInit } from '@angular/core';
import { Slider } from './slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class YlSliderComponent implements OnInit, OnDestroy {

  slideIndex = 1;
  sliders: Slider[] = [];
  intervalRef: any;

  constructor() {
    this.intervalRef = setInterval(() => {
      this.selectSlider(this.slideIndex++);
    }, 5000);
  }

  ngOnInit() {
    this.sliders.push({ id: 1, imageUrl: '/assets/images/slider-1.jpg', imageTitle: '', display: true });
    this.sliders.push({ id: 2, imageUrl: '/assets/images/slider-2.jpg', imageTitle: '', display: true });
    this.sliders.push({ id: 3, imageUrl: '/assets/images/slider-3.jpg', imageTitle: '', display: true });
    this.selectSlider(1);
  }

  ngOnDestroy() {
    clearInterval(this.intervalRef);
  }

  selectSlider(id: number) {
    if (id >= this.sliders.length) { this.slideIndex = 1; }
    if (id < 1) { this.slideIndex = this.sliders.length; }

    const newLocal = this;
    for (let i = 0; i < newLocal.sliders.length; i++) {
      this.sliders[i].display = false;
    }

    this.sliders[this.slideIndex - 1].display = true;
  }

}


