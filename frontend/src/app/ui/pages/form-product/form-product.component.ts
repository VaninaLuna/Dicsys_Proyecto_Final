import { Component } from '@angular/core';
import { Categoria, Product } from '../../../types/types';
import { Router } from '@angular/router';
import { ProductosService } from '../../../data/services/productos/productos.service';
import { FormsModule } from '@angular/forms';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { Url } from '../../../data/url';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {

  product: Product = {
    id: 0,
    nombre: '',
    fecha_vencimiento: '',
    stock: 0,
    precio: 0,
    url_img: '',
    id_categoria: 0,
  }


  public categoria: Categoria = {
    id: 0,
    nombre: '',
  };

  constructor(
    public router: Router,
    public productoService: ProductosService,
    public urlNavigateService: UrlNavigateService,
    public url: Url,
  ) {

    const navegabilidad = this.router.getCurrentNavigation();

    if (navegabilidad?.extras?.state) {
      const data = navegabilidad.extras.state;
      this.product = data['producto'] || this.product;
      this.categoria = data['categoria'];
      this.product.id_categoria = this.categoria.id;
    }

  }

  guardarProduct() {
    if (this.product.id === 0) {
      console.log(this.product)
      this.productoService.createProduct(this.product).subscribe(result => {
        this.urlNavigateService.navigateUrlData(this.url.products, {
          state: {
            categoria: this.categoria


          },
        });

      })
    } else {
      this.productoService.updateProduct(this.product.id, this.product).subscribe(result => {
        console.log(result)
        this.urlNavigateService.navigateUrlData(this.url.products, {
          state: {
            categoria: this.categoria


          },
        });
      })
    }
  }
}




