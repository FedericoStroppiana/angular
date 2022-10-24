import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type CocktailListApi = {
  drinks: [{ idDrink: string; strDrink: string; strCategory: string; strDrinkThumb: string;}];
};
type CocktailList = {
  id: string;
  name: string;
  category: string;
  image: string;
};

type CocktailDetailApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strCategory: string;
      strAlcoholic: string;
      strInstructions: string;
      strDrinkThumb: string;
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;
      strIngredient5: string;
      strIngredient6: string;
      strIngredient7: string;
      strIngredient8: string;
      strIngredient9: string;
      strIngredient10: string;
      strIngredient11: string;
      strIngredient12: string;
      strIngredient13: string;
      strIngredient14: string;
      strIngredient15: string;
      strIngredient16: string;
      strMeasure1: string;
      strMeasure2: string;
      strMeasure3: string;
      strMeasure4: string;
      strMeasure5: string;
      strMeasure6: string;
      strMeasure7: string;
      strMeasure8: string;
      strMeasure9: string;
      strMeasure10: string;
      strMeasure11: string;
      strMeasure12: string;
      strMeasure13: string;
      strMeasure14: string;
      strMeasure15: string;
    }
  ];
};

type CocktailDetail = {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  instructions: string;
  image: string;
  ingredients: string[];
  measures: string[];
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  drinksListApi: CocktailListApi | undefined;
  drinksList: CocktailList[] | undefined;

  drinkDetailApi: CocktailDetailApi | undefined;
  drinkDetail: CocktailDetail | undefined;

  searchDrinks(drink: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
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

  searchDrinkById(id: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response) => {
        this.drinkDetailApi = response as CocktailDetailApi;

        const ingredients: string[] = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient =
            this.drinkDetailApi.drinks[0][
              `strIngredient${i}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (ingredient) {
            ingredients.push(ingredient);
          }
        }

        const measures: string[] = [];
        for (let i = 1; i <= 15; i++) {
          const measure =
            this.drinkDetailApi.drinks[0][
              `strMeasure${i}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (measure) {
            measures.push(measure);
          }
        }

        this.drinkDetail = {
          id: this.drinkDetailApi.drinks[0].idDrink,
          name: this.drinkDetailApi.drinks[0].strDrink,
          category: this.drinkDetailApi.drinks[0].strCategory,
          alcoholic: this.drinkDetailApi.drinks[0].strAlcoholic,
          instructions: this.drinkDetailApi.drinks[0].strInstructions,
          image: this.drinkDetailApi.drinks[0].strDrinkThumb,
          ingredients: ingredients,
          measures: measures,
        };
      });
  }
}
