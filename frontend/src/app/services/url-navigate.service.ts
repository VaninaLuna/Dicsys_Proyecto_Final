import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlNavigateService {

  constructor(private router : Router) { }

  //navegar sin pasar datos
  navigateUrl(url : string){
    this.router.navigateByUrl(url);
  }

  //navegar pasando datos
  navigateUrlData(url: string, params: any){
    this.router.navigateByUrl(url, params)
  }

}
