import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

type CocktailDetailApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strCategory: string;
      strAlcoholic: string;
      strInstructions: string;
      strInstructionsDE: string;
      strInstructionsES: string;
      strInstructionsFR: string;
      strInstructionsIT: string;
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
  instructions?: { [key: string]: string };
  image: string;
  ingredients: string[];
  measures: string[];
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  cocktailListApi: CocktailListApi | undefined;
  cocktailList: CocktailList[] | undefined;

  cocktailDetailApi: CocktailDetailApi | undefined;
  cocktailDetail: CocktailDetail | undefined;

  searchByLetter(letter: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .subscribe((response) => {
        this.cocktailListApi = response as CocktailListApi;

        this.cocktailList = this.cocktailListApi.drinks.map((drink) => ({
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
        this.cocktailListApi = response as CocktailListApi;

        this.cocktailList = this.cocktailListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }

  searchByIngredient(ingredient: string) {
    this.http
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .subscribe((response) => {
        this.cocktailListApi = response as CocktailListApi;

        this.cocktailList = this.cocktailListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }

  searchById(id: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response) => {
        this.cocktailDetailApi = response as CocktailDetailApi;

        const ingredients: string[] = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient =
            this.cocktailDetailApi.drinks[0][
              `strIngredient${i}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (ingredient) {
            ingredients.push(ingredient);
          }
        }

        const measures: string[] = [];
        for (let i = 1; i <= 15; i++) {
          const measure =
            this.cocktailDetailApi.drinks[0][
              `strMeasure${i}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (measure) {
            measures.push(measure);
          }
        }

        const instructions: { [key: string]: string } = {};
        const languages = ['', 'DE', 'ES', 'FR', 'IT'];
        for (const language of languages) {
          const instruction =
            this.cocktailDetailApi.drinks[0][
              `strInstructions${language}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (instruction) {
            instructions[language] = instruction;
          }
        }

        this.cocktailDetail = {
          id: this.cocktailDetailApi.drinks[0].idDrink,
          name: this.cocktailDetailApi.drinks[0].strDrink,
          category: this.cocktailDetailApi.drinks[0].strCategory,
          alcoholic: this.cocktailDetailApi.drinks[0].strAlcoholic,
          instructions: instructions,
          image: this.cocktailDetailApi.drinks[0].strDrinkThumb,
          ingredients: ingredients,
          measures: measures,
        };
      });
  }

  searchRandom() {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .subscribe((response) => {
        this.cocktailDetailApi = response as CocktailDetailApi;

        const ingredients: string[] = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient =
            this.cocktailDetailApi.drinks[0][
              `strIngredient${i}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (ingredient) {
            ingredients.push(ingredient);
          }
        }

        const measures: string[] = [];
        for (let i = 1; i <= 15; i++) {
          const measure =
            this.cocktailDetailApi.drinks[0][
              `strMeasure${i}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (measure) {
            measures.push(measure);
          }
        }

        const instructions: { [key: string]: string } = {};
        const languages = ['EN', 'DE', 'ES', 'FR', 'IT'];
        for (let language of languages) {
          const instruction =
            this.cocktailDetailApi.drinks[0][
              `strInstructions${language === 'EN' ? '' : language}` as keyof CocktailDetailApi['drinks'][0]
            ];
          if (instruction) {
            instructions[language] = instruction;
          } else {
            instructions[language] = 'No instructions available';
          }
        }

        this.cocktailDetail = {
          id: this.cocktailDetailApi.drinks[0].idDrink,
          name: this.cocktailDetailApi.drinks[0].strDrink,
          category: this.cocktailDetailApi.drinks[0].strCategory,
          alcoholic: this.cocktailDetailApi.drinks[0].strAlcoholic,
          instructions: instructions,
          image: this.cocktailDetailApi.drinks[0].strDrinkThumb,
          ingredients: ingredients,
          measures: measures,
        };
        
      });
  }

  ingredientList: string[] = [
    'Light rum',
    'Applejack',
    'Gin',
    'Dark rum',
    'Sweet Vermouth',
    'Strawberry schnapps',
    'Scotch',
    'Apricot brandy',
    'Triple sec',
    'Southern Comfort',
    'Orange bitters',
    'Brandy',
    'Lemon vodka',
    'Blended whiskey',
    'Dry Vermouth',
    'Amaretto',
    'Tea',
    'Champagne',
    'Coffee liqueur',
    'Bourbon',
    'Tequila',
    'Vodka',
    'Añejo rum',
    'Bitters',
    'Sugar',
    'Kahlua',
    'demerara Sugar',
    'Dubonnet Rouge',
    'Lime juice',
    'Irish whiskey',
    'Apple brandy',
    'Carbonated water',
    'Cherry brandy',
    'Creme de Cacao',
    'Grenadine',
    'Port',
    'Coffee brandy',
    'Red wine',
    'Rum',
    'Grapefruit juice',
    'Ricard',
    'Sherry',
    'Cognac',
    'Sloe gin',
    'Apple juice',
    'Pineapple juice',
    'Lemon juice',
    'Sugar syrup',
    'Milk',
    'Strawberries',
    'Chocolate syrup',
    'Yoghurt',
    'Mango',
    'Ginger',
    'Lime',
    'Cantaloupe',
    'Berries',
    'Grapes',
    'Kiwi',
    'Tomato juice',
    'Cocoa powder',
    'Chocolate',
    'Heavy cream',
    'Galliano',
    'Peach Vodka',
    'Ouzo',
    'Coffee',
    'Spiced rum',
    'Water',
    'Espresso',
    'Angelica root',
    'Orange',
    'Cranberries',
    'Johnnie Walker',
    'Apple cider',
    'Everclear',
    'Cranberry juice',
    'Egg yolk',
    'Egg',
    'Grape juice',
    'Peach nectar',
    'Lemon',
    'Firewater',
    'Lemonade',
    'Lager',
    'Whiskey',
    'Absolut Citron',
    'Pisco',
    'Irish cream',
    'Ale',
    'Chocolate liqueur',
    'Midori melon liqueur',
    'Sambuca',
    'Cider',
    'Sprite',
    '7-Up',
    'Blackberry brandy',
    'Peppermint schnapps',
    'Creme de Cassis',
  ];

  getIngredientImg(ingredient: string) {
    return this.http.get(
      `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`
    );
  }
}
