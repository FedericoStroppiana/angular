import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  constructor(
    public api: APIService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() list?: string = 'cocktailList';
  @Input() type?: string = 'newPage';
  searchedIngredient: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchedIngredient = params['ingredient'];
    });
  }

  ingredientOnClick(ingredient: string) {
    this.api.searchByIngredient(ingredient);
    this.router.navigateByUrl('/list?ingredient=' + ingredient);
  }
}
