import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api';

@Component({
  selector: 'app-print-drinks',
  templateUrl: './print-drinks.component.html',
  styleUrls: ['./print-drinks.component.css']
})
export class PrintDrinksComponent implements OnInit {

  constructor(public api: APIService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api.searchDrinks(this.route.snapshot.params['searchedDrinkName']);
  }

  handleOnInfo(id: string) {
    this.router.navigateByUrl(`${this.router.url}/${id}`);
  }
}
