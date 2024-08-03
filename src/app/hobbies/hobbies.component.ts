import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  hobbies = [
    'Exploring mythology and spirituality',
    'Dancing classical dance and participating in competitions',
    'Writing poems and stories, focusing on emotions and beautifully binding words',
    'Drawing, painting, and creating designs such as mandala art or rangolis',
    'Traveling, especially in nature'
  ];
}
