import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  loader;
  constructor(  private $loadingController: LoadingController,) { }

  async LoaderActivate(message: string = 'Loading...') {
    this.loader = await this.$loadingController.create({
        message
      });
      this.loader.present();
  }

  LoaderStop(){
    this.loader.dismiss();
  }

}
