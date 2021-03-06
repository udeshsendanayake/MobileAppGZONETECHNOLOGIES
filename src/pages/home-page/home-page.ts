import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyOrdersPage } from '../my-orders/my-orders';
import { MyDeliveriesPage } from '../my-deliveries/my-deliveries';
import { MyPaymentsPage } from '../my-payments/my-payments';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';
import { WarrantyHomePage } from '../warranty-home/warranty-home';

@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {
  addver;
  array = [];
  constructor(public navCtrl: NavController) {
    this.addver = localStorage.getItem('Advertiesements');
    this.array = this.addver.split(',');
  }

  goToMyOrders(params){
    if (!params) params = {};
    this.navCtrl.push(MyOrdersPage);
  }

  goToMyDeliveries(params){
    if (!params) params = {};
    this.navCtrl.push(MyDeliveriesPage);
  }

  goToMyPayments(params){
    if (!params) params = {};
    this.navCtrl.push(MyPaymentsPage);
  }

  goToMyProfile(params){
    if (!params) params = {};
    this.navCtrl.push(MyProfilePage);
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  /**create function for go to warranty home*/
  goToWarrantyHome(params){
    if (!params) params = {};
    this.navCtrl.push(WarrantyHomePage);
  }

}
