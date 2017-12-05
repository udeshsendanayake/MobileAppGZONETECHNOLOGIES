import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import {AlertController} from 'ionic-angular';

import {HomePagePage} from '../home-page/home-page';

@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage {
  account : {
    username: string;
    password: string;
  } = {
    username: "",
    password: ""
  };
  response : any;
  constructor(public navCtrl : NavController, public http : Http, public Alert : AlertController) {}

  goToHomePage(params) {
    this
      .http
      .get('http://localhost:8081/GZone/Login.php?username=' + this.account.username)
      .subscribe((response) => {
        var res = response.json();
        console.log(res[0]);
        // var d = res.toString(); if(d.indexOf(this.account.username) != -1){
        // if(d.indexOf(this.account.password) != -1){     console.log('Login Success')
        //    localStorage.setItem('Auth_Token', this.account.username)
        // this.navCtrl.push(HomePagePage);   }else{     console.log('Login failed')
        // let alert = this.Alert.create({       title: 'Error',      subTitle:
        // 'Password Incorrect',       buttons: ['OK']     });     alert.present();   }
        // } else {   let alert = this.Alert.create({     title: 'Error',     subTitle:
        // 'Username Incorrect',     buttons: ['OK']   });   alert.present(); }
      },
    error => {
      console.error(error);
    });
  }

  // logForm(res){   console.log(res + " "+ res.Password);   var d =
  // res.toString();   if(d.indexOf('Response with status: 200 OK') != -1){
  // console.log('We are in mf')     this.navCtrl.push(HomePagePage);   } }

}