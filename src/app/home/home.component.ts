import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SharedService) { }

  //PeopleList:any=[];
  CustomerList:any=[];
  stringJson: any;
  stringObject: any;

  ngOnInit(): void {
    this.refreshCustomerList();
    //this.refreshPeopleList();
  }

  // refreshPeopleList(){
  //   this.service.getPeopleList().subscribe(data=>{ this.PeopleList=data; });
  //   this.service.getPeopleList().subscribe(data => console.log(data));
  // }

  refreshCustomerList(){
    this.service.getPropertyList().subscribe(data=>{ this.CustomerList=data; });
    this.service.getPropertyList().subscribe(res => console.log(res));
  }
}
