import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from '../../api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private api: APIService) {}

  formGroup = new FormGroup({
    drinkName: new FormControl(''),
  });

  ngOnInit(): void {}

  handleOnSubmit(e: Event) {
    e.preventDefault();
    this.api.searchDrinks(this.formGroup.get('drinkName')!.value!);
  }
}
