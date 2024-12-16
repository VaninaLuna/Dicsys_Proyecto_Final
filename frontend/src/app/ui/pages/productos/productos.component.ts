import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { globalText } from '../../../data/text';
import { Router } from '@angular/router';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { ProductosService } from '../../../data/services/productos/productos.service';
import { NgFor } from '@angular/common';
import { Url } from '../../../data/url';
import { Categoria, Product } from '../../../types/types';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeaderComponent, NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  public listProducts: any = []
  public categoria: Categoria = {
    id: 0,
    nombre: ''
  }

  constructor(
    public globalText: globalText,
    public router: Router,
    public productoService: ProductosService,
    public urlNavigateService: UrlNavigateService,
    public url: Url,
    
  ) {

    const navegabilidad = this.router.getCurrentNavigation();

    if (navegabilidad && navegabilidad.extras && navegabilidad.extras.state) {
      const data = navegabilidad.extras.state;
      this.categoria = data['categoria']
    }

    this.productoService.getProductByCategory(this.categoria.id.toString()).subscribe(result => {
      this.listProducts = result
      console.log(result)
    });

  }

  eliminarProducto(idProducto: string) {
    this.productoService.deleteProductById(idProducto).subscribe((result) => {
      location.reload();
    })

  }

  navigateCreateProducts(producto?: Product) {
    this.urlNavigateService.navigateUrlData(this.url.form, {
      state: {
        producto: producto,
        categoria: this.categoria
      },
    });
  }


}
