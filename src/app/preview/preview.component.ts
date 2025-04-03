import { Component } from '@angular/core';
import { FormvalueService } from '../formvalue.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  formDetails: any[] = [];

  constructor(private formDataService: FormvalueService) {}

  ngOnInit() {
    this.formDataService.currentFormData.subscribe(data => {
      if (data) {
        this.formDetails = data;
       // console.log("Length", this.formDetails.length)
      }
    });
  }
}
