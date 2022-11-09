import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(public api: APIService) {}

  ngOnInit(): void {
    this.api.searchByName('gin');
  }

  disableCocktailView: boolean = false;
  checkedCocktails: string[] = [];

  onSubmit(e: any) {
    const searchedName = e.target[0].value;
    this.api.searchByName(searchedName);
    this.disableCocktailView = false;
  }

  onCheck(e: any, cocktailName: string) {
    if (this.checkedCocktails.includes(cocktailName)) {
      this.checkedCocktails = this.checkedCocktails.filter(
        (cocktail) => cocktail !== cocktailName
      );
    } else {
      if (this.checkedCocktails.length < 5) {
        this.checkedCocktails.push(cocktailName);
      } else {
        e.target.checked = false;
        alert('You can only select 5 cocktails!');
      }
    }
    console.log(this.checkedCocktails);
  }
}
