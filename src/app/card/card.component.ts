import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service:SharedService) { }

  PeopleList:any=[];
  stringJson: any;
  stringObject: any;

  ngOnInit(): void {
    this.refreshPeopleList();
  }

  refreshPeopleList(){
    this.service.getPeopleList().subscribe(data=>{ this.PeopleList=data; });
  }

}
