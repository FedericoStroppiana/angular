import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api';

@Component({
  selector: 'app-print-drinksdrink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {

  constructor(public api: APIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  console.log(this.route.snapshot.params['idDrink']);
  }
}
