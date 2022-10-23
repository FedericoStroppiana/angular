import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api';

@Component({
  selector: 'app-print-drinksdrink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css'],
})
export class DrinkDetailComponent implements OnInit {
  constructor(
    public api: APIService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.api.searchDrinkById(this.route.snapshot.params['idDrink']);
  }
}
