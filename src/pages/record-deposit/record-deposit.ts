import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import {AlertController} from 'ionic-angular';
import {MyPaymentsPage} from '../my-payments/my-payments';

import { UploadDepositSlipPage } from '../upload-deposit-slip/upload-deposit-slip';

@Component({
  selector: 'page-record-deposit',
  templateUrl: 'record-deposit.html'
})
export class RecordDepositPage {
  finalAmount : string = "null";
  amount : string ="null";
  year: string = "null";
  month : string = "null";
  date : string = "null";
  constructor(public navCtrl: NavController, public http: Http, public Alert : AlertController) {
    var d = new Date();
    var date = d.getMonth()+1;
    let userID = localStorage.getItem('Agent_ID');
    this.http.post('http://localhost:8081/GZone/GettotalAmount.php?agentId='+userID+'&date='+date,"").subscribe((response) => {
        let res = response.json();
        this.amount = res[0].total_amount;
        
    });

  }

  goToUploadDepositSlip(params){
    if (!params) params = {};
    this.navCtrl.push(UploadDepositSlipPage);
  }



  addDeposit(){
    if( this.year == "null" || this.month == "null" || this.date == "null"){
      let alert = this.Alert.create({title: 'Error', subTitle: 'All fields must be filled', buttons: ['OK']});
      alert.present();
    }else{
      let Agent_Id = localStorage.getItem('Agent_ID');
      this.http.post('http://localhost:8081/GZone/recordDeposit.php?agentId='+Agent_Id+'&year='+this.year.trim()+'&month='+this.month.trim()+'&date='+this.date.trim(),"").subscribe((response) => {
        console.log(response);
        if(response.statusText){
          let alert = this.Alert.create({title: 'Success', subTitle: 'Successfull Added', buttons: ['OK']});
          alert.present();
          this.amount ="null";
          this.year = "null";
          this.month = "null";
          this.date = "null";
        }else{
          let alert = this.Alert.create({title: 'Error', subTitle: 'Error Inserting values', buttons: ['OK']});
          alert.present();
        }
      });
      let userID = localStorage.getItem('Agent_ID');
      this.http.post('https://senda-mobile-app-senuraa.c9users.io/mail/index.php?agentId=' + userID+'&amount='+this.amount,"").subscribe((response) => {
        console.log(response);
      });
      this.navCtrl.push(MyPaymentsPage);

    }

  }

}

