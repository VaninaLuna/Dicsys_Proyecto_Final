import { Component } from '@angular/core';
import { globalText } from '../../../data/text';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from "../../components/slider/slider.component";
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { FooterComponent } from "../../components/footer/footer.component";
import { Url } from '../../../data/url';
import { NgFor } from '@angular/common';
import { CategoriasService } from '../../../data/services/categorias/categorias.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrayCategorias: any = [];



  constructor(
    public globalText: globalText,
    public urlNavigateService: UrlNavigateService,
    public url: Url,
    public categoriasService: CategoriasService,


  ) {
    this.categoriasService.getCategory().subscribe(result => {
      this.arrayCategorias = result
    });
  }

  

  navigateProducts(categoria: any) {
    this.urlNavigateService.navigateUrlData(this.url.products, {
      state: {
        categoria
      },
    });
  }



}
