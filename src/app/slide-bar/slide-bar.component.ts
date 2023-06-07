import { Component } from '@angular/core';



@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent {


    slides = [
      { id: 1, image: 'path-to-image1', title: 'Slide 1', description: 'Description 1' },
      { id: 2, image: 'path-to-image2', title: 'Slide 2', description: 'Description 2' },
      { id: 3, image: 'path-to-image3', title: 'Slide 3', description: 'Description 3' }
    ];
}




