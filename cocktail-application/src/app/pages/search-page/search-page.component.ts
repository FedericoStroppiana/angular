import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"],
})
export class SearchPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ingredientList: string[] = [
    "Light rum",
    "Applejack",
    "Gin",
    "Dark rum",
    "Sweet Vermouth",
    "Strawberry schnapps",
    "Scotch",
    "Apricot brandy",
    "Triple sec",
    "Southern Comfort",
    "Orange bitters",
    "Brandy",
    "Lemon vodka",
    "Blended whiskey",
    "Dry Vermouth",
    "Amaretto",
    "Tea",
    "Champagne",
    "Coffee liqueur",
    "Bourbon",
    "Tequila",
    "Vodka",
    "Añejo rum",
    "Bitters",
    "Sugar",
    "Kahlua",
    "demerara Sugar",
    "Dubonnet Rouge",
    "Lime juice",
    "Irish whiskey",
    "Apple brandy",
    "Carbonated water",
    "Cherry brandy",
    "Creme de Cacao",
    "Grenadine",
    "Port",
    "Coffee brandy",
    "Red wine",
    "Rum",
    "Grapefruit juice",
    "Ricard",
    "Sherry",
    "Cognac",
    "Sloe gin",
    "Apple juice",
    "Pineapple juice",
    "Lemon juice",
    "Sugar syrup",
    "Milk",
    "Strawberries",
    "Chocolate syrup",
    "Yoghurt",
    "Mango",
    "Ginger",
    "Lime",
    "Cantaloupe",
    "Berries",
    "Grapes",
    "Kiwi",
    "Tomato juice",
    "Cocoa powder",
    "Chocolate",
    "Heavy cream",
    "Galliano",
    "Peach Vodka",
    "Ouzo",
    "Coffee",
    "Spiced rum",
    "Water",
    "Espresso",
    "Angelica root",
    "Orange",
    "Cranberries",
    "Johnnie Walker",
    "Apple cider",
    "Everclear",
    "Cranberry juice",
    "Egg yolk",
    "Egg",
    "Grape juice",
    "Peach nectar",
    "Lemon",
    "Firewater",
    "Lemonade",
    "Lager",
    "Whiskey",
    "Absolut Citron",
    "Pisco",
    "Irish cream",
    "Ale",
    "Chocolate liqueur",
    "Midori melon liqueur",
    "Sambuca",
    "Cider",
    "Sprite",
    "7-Up",
    "Blackberry brandy",
    "Peppermint schnapps",
    "Creme de Cassis",
  ];

  disableNameInput: boolean = false;
  disableIngredientInput: boolean = false;

  nameOnChange(e: any) {
    if (e.target.value) {
      this.disableIngredientInput = true;
    } else {
      this.disableIngredientInput = false;
    }
    console.log("ciiao");
  }

  ingredientOnChange(e: any) {
    if (e.target.value) {
      this.disableNameInput = true;
    } else {
      this.disableNameInput = false;
    }
    console.log("ciiao");
  }
}
