import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-money-out-modal',
  templateUrl: './add-money-out-modal.component.html',
  styleUrls: ['./add-money-out-modal.component.scss'],
})
export class AddMoneyOutModalComponent implements OnInit {
  myDate: String;
  defaultDate = new Date().toISOString();
  amount: any;
  testName: any;
  formGroup: FormGroup;
  

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder) { 
      
    }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      amount: new FormControl(''),
      description: new FormControl('')
    });
    this.defaultDate = new Date().toISOString();
    console.log(this.defaultDate);
  }

  submitForm() {
    console.log(this.formGroup.value);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
