import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

type CocktailListApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strCategory?: string;
      strDrinkThumb: string;
    }
  ];
};

type CocktailList = {
  id: string;
  name: string;
  category?: string;
  image: string;
};

@Injectable({
  providedIn: "root",
})
export class APIService {
  constructor(private http: HttpClient) {}

  cocktailListApiHome: CocktailListApi | undefined;
  cocktailListHome: CocktailList[] | undefined;
  
  cocktailListApiSearch: CocktailListApi | undefined;
  cocktailListSearch: CocktailList[] | undefined;

  searchByLetter(letter: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .subscribe((response) => {
        this.cocktailListApiHome = response as CocktailListApi;

        this.cocktailListHome = this.cocktailListApiHome.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }

  searchByName(name: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .subscribe((response) => {
        console.log(response);
        
        this.cocktailListApiSearch = response as CocktailListApi;

        this.cocktailListSearch = this.cocktailListApiSearch.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }

  searchByIngredient(ingredient: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .subscribe((response) => {
        console.log(response);
        
        this.cocktailListApiSearch = response as CocktailListApi;

        this.cocktailListSearch = this.cocktailListApiSearch.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }
}
