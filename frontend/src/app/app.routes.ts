import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { ProductosComponent } from './ui/pages/productos/productos.component';
import { FormProductComponent } from './ui/pages/form-product/form-product.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'productos/form', component: FormProductComponent}
];
