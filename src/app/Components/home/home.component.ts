import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // storedata :StoreData;
 name :string='Store ITI';
  constructor() {
   /// this.storedata=new this.storedata('ITI','https://fakeimg.pl/200/',['giza','cairo','smart'])


   }

  ngOnInit(): void {
  }
 
}
