import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../../api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(public api: APIService, private router: Router) {}

  formGroup = new FormGroup({
    searchedDrinkName: new FormControl(''),
  });

  ngOnInit(): void {}

  handleOnSearch() {
    this.api.searchDrinks(this.formGroup.get('searchedDrinkName')!.value!)
    this.router.navigateByUrl(
      `/search/${this.formGroup.get('searchedDrinkName')!.value!}`
    );
  }
}
