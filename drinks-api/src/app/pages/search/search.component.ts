import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  formGroup = new FormGroup({
    searchedDrinkName: new FormControl(''),
  });

  ngOnInit(): void {}

  handleOnSearch() {
    this.router.navigateByUrl(`/search/${this.formGroup.get('searchedDrinkName')!.value!}`);
  }
}
