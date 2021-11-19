import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMoneyOutModalComponent } from './add-money-out-modal/add-money-out-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddMoneyOutModalComponent
    });

    modal.onDidDismiss().then((data: any) => {
      console.log('dismiss');
      if(data.data) {
        console.log(data.data);
      }
    });

    return await modal.present();
  }

  async editItem() {
    const modal = await this.modalController.create({
      component: AddMoneyOutModalComponent
    });
    return await modal.present();
  }

  async deleteItem() {
    const modal = await this.modalController.create({
      component: AddMoneyOutModalComponent
    });
    return await modal.present();
  }
}
