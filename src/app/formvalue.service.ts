import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormvalueService {

  constructor() { }

  private formData = new BehaviorSubject<any>(null);
  currentFormData = this.formData.asObservable();

  updateFormData(data: any) {
    this.formData.next(data);
  }
}
