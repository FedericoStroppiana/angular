import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  // { path: "search", component: SearchComponent },
  // { path: "home", component: HomeComponent },
  // { path: "detail/:idDrink", component: DetailComponent },
  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "**", redirectTo: "home" },
  { path: "detail", component: DetailComponent },
  { path: "", redirectTo: "detail", pathMatch: "full" },
  { path: "**", redirectTo: "detail" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
