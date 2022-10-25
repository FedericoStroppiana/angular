import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

  constructor(public api: APIService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.searchDrinkById(this.route.snapshot.params['idDrink']);
  }

}
