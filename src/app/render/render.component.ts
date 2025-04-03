import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormvalueService } from '../formvalue.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrl: './render.component.css'
})
export class RenderComponent {

  fieldForm: FormGroup;
  inputFieldCount = 0;
  selectFieldCount = 0;
  idCounter = 1; 

  constructor(private fb: FormBuilder, private formDataServices: FormvalueService) {
    this.fieldForm = this.fb.group({
      fields: this.fb.array([]),
    });
  }

  get fields(): FormArray {
    return this.fieldForm.get('fields') as FormArray;
  }

  DropHere(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const fieldType = event.dataTransfer.getData('text/plain');
      let label = '';

      if (fieldType === 'input') {
        label = `Textbox ${++this.inputFieldCount}`;
      } else if (fieldType === 'select') {
        label = `Dropdown ${++this.selectFieldCount}`;
      }

      this.fields.insert(
        0,
        this.fb.group({
          id: this.idCounter++,
          type: fieldType,
          label: label,
        })
      );
    }
  }

  removeElement(index: number, type: string) {
    const removedElement = this.fields.at(index).value;
    if (removedElement.type === 'input') this.inputFieldCount--;
    else if (removedElement.type === 'select') this.selectFieldCount--;

    this.fields.removeAt(index);
  }

  previewForm() {    
    this.formDataServices.updateFormData(this.fieldForm.value.fields);
    // console.log('Form Data: ' + JSON.stringify(this.fieldForm.value, null, 2));
  }

}
