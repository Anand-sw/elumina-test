import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {


  onDragElement(event: DragEvent, type: string) {
    if (event.dataTransfer) {
      event.dataTransfer.setData("text/plain", type);
    }
  }
  
}
