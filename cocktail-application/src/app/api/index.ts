import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

type CocktailListApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strCategory: string;
      strDrinkThumb: string;
    }
  ];
};

type CocktailList = {
  id: string;
  name: string;
  category: string;
  image: string;
};

@Injectable({
  providedIn: "root",
})
export class APIService {
  constructor(private http: HttpClient) {}

  drinksListApi: CocktailListApi | undefined;
  drinksList: CocktailList[] | undefined;

  searchByLetter(letter: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .subscribe((response) => {
        this.drinksListApi = response as CocktailListApi;

        this.drinksList = this.drinksListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }
}
