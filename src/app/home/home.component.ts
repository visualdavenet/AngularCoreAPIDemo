import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SharedService) { }

  PeopleList:any=[];
  stringJson: any;
  stringObject: any;

  ngOnInit(): void {
    this.refreshPeopleList();
  }

  refreshPeopleList(){
    this.service.getPeopleList().subscribe(data=>{
      this.PeopleList=data;
    });
  }
}
