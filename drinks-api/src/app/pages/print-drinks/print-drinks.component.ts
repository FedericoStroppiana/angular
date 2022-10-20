import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../api';

@Component({
  selector: 'app-print-drinks',
  templateUrl: './print-drinks.component.html',
  styleUrls: ['./print-drinks.component.css']
})
export class PrintDrinksComponent implements OnInit {

  constructor(public api: APIService, private router: Router) {}

  ngOnInit(): void {
  }

  handleOnInfo(id: string) {
    this.router.navigateByUrl(`/drink/${id}`);
  }
}
