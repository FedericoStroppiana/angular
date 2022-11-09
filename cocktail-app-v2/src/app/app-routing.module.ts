import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './pages/card-list/card-list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "detail/:idDrink", component: DetailComponent },
  { path: "list", component: CardListComponent },
  { path: "order", component: OrderComponent }, 
  { path: "", redirectTo: "order", pathMatch: "full" },
  { path: "**", redirectTo: "order" },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
