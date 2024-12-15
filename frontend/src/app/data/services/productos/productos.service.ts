import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductByCategory(idCategoria: string) {
    return this.http.get('http://localhost:4000/api/productos/' + idCategoria);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post('http://localhost:4000/api/productos/', product);
  }

  updateProduct(idProducto: number, product: Product): Observable<any> {
    return this.http.patch('http://localhost:4000/api/productos/' + idProducto, product);
  }

  deleteProductById(idProducto: string) {
    return this.http.delete('http://localhost:4000/api/productos/' + idProducto);

  }
}
