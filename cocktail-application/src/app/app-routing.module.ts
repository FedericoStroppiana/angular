import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CocktailDetailComponent } from "./pages/cocktail-detail/cocktail-detail.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchPageComponent },
  { path: "detail/:idDrink", component: CocktailDetailComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
