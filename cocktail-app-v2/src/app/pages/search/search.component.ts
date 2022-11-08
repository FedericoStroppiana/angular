import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(public api: APIService) {}

  ngOnInit(): void {}

  disableNameInput: boolean = false;
  disableIngredientInput: boolean = false;
  disableCocktailView: boolean = true;
  activeTab: string = 'search';

  nameOnChange(e: any) {
    if (e.target.value) {
      this.disableIngredientInput = true;
    } else {
      this.disableIngredientInput = false;
    }
  }

  ingredientOnChange(e: any) {
    if (e.target.value) {
      this.disableNameInput = true;
    } else {
      this.disableNameInput = false;
    }
  }

  onSubmit(e: any) {
    const searchedName = e.target[0].value;
    const searchedIngredient = e.target[1].value;

    if (searchedName) {
      this.api.searchByName(searchedName);
    } else {
      this.api.searchByIngredient(searchedIngredient);
    }

    this.disableCocktailView = false;
  }

  onChangeTab(tab: string) {
    if (tab === 'search') {
      this.activeTab = 'search';
    } else if (tab === 'ingredients') {
      this.activeTab = 'ingredients';
    }
  }
}
