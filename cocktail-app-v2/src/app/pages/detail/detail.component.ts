import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(public api: APIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.api.searchById(this.route.snapshot.params['idDrink']);
    this.api.searchById('11000');
  }

  disableCocktailView: boolean = true;
  searchedIngredient: string = '';

  ingredientOnClick(e: any) {
    this.api.searchByIngredient(e.target.innerText);
    this.searchedIngredient = e.target.innerText;
    this.disableCocktailView = false;
  }

  infoOnClick(idDrink: string) {
    this.api.searchById(idDrink);    
    this.disableCocktailView = true;
  }
}
