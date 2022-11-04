import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(public api: APIService) {}

  ngOnInit(): void {}

  disableCocktailView: boolean = true;

  onSubmit(e: any) {
    const searchedName = e.target[0].value;
    console.log(searchedName);
    this.api.searchByName(searchedName);
    this.disableCocktailView = false;

  }
}
