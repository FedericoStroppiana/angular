import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetailComponent } from './pages/drink-detail/drink-detail.component';
import { PrintDrinksComponent } from './pages/print-drinks/print-drinks.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:searchedDrinkName', component: PrintDrinksComponent },
  { path: 'search/:searchedDrinkName/:idDrink', component: DrinkDetailComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
