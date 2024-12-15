import { Component } from '@angular/core';
import { globalText } from '../../../data/text';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  arrayCategorias: any[] = [];
  currentSlide: number = 0;
  autoSlideInterval: any;
  constructor(
    public globalText: globalText
  ) { }


  ngOnInit(): void {
    this.arrayCategorias = [
      { nombre: 'Bebidas', url_img: 'https://acdn.mitiendanube.com/stores/001/551/869/products/a6d27fb3-5b87-445f-a4cf-c0912942b5571-c194e7863699c9fbb816675731622885-1024-1024.png' },
      { nombre: 'Jugutes', url_img: 'https://quimica.uchile.cl/dam/jcr:1f87abca-741d-406f-b866-26743ce3943c/juguetes-1.jpg' },
    ];

    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.arrayCategorias.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.arrayCategorias.length) % this.arrayCategorias.length;
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

}
