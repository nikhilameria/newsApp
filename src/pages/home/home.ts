import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestMethod, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';


let apiKey = '070f5c0e8fec458e92742cf662fad9fd';
let baseUrl = 'https://newsapi.org/v2/top-headlines?';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  countryList: any;
  outputData: any = " ";
  country: string = "India";
  countryId: string = "in";
  constructor(public navCtrl: NavController, public http: Http) {
    this.countryList = ["India", "United States"];
    this.changeCountry();
  }
  navigate(link){
    debugger;
    window.open(link, '_system')
  }
  changeCountry() {
    if (this.country == 'Unites States') {
      this.countryId = 'us';
    }
    this.http.get(baseUrl + 'country=' + this.countryId + '&apiKey=' + apiKey).map(res => res.json()).subscribe(data => {
      this.outputData = data;
      console.log(this.outputData)
  });

  }
}
