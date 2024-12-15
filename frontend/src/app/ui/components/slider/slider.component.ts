import { Component } from '@angular/core';
import { globalText } from '../../../data/text';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  constructor(
    public globalText: globalText,
    
  ) {}
}
