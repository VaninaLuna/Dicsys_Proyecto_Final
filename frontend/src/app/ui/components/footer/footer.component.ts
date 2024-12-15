import { Component } from '@angular/core';
import { globalText } from '../../../data/text';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public globalText: globalText){

  }
    
}
