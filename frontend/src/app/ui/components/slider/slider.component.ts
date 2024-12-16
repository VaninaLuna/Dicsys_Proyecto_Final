import { Component } from '@angular/core';
import { globalText } from '../../../data/text';
import { NgFor } from '@angular/common';
import { CategoriasService } from '../../../data/services/categorias/categorias.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  arrayCategorias: any = [];
  currentSlide: number = 0;
  autoSlideInterval: any;
  constructor(
    public globalText: globalText,
    public categoriasService: CategoriasService,
  ) { 
    
   
  }


  ngOnInit(): void {
    this.categoriasService.getCategory().subscribe(result => {
      this.arrayCategorias = result
    });

    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
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
