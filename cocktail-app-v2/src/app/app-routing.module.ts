import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "detail/:idDrink", component: DetailComponent },
  { path: "order", component: OrderComponent }, 
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "**", redirectTo: "search" },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
