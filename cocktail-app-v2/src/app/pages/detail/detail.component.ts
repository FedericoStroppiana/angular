import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(public api: APIService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
  }
  
  selectLanguage: string = 'EN';

  ingredientOnClick(e: any) {
    this.api.searchByIngredient(e.target.innerText);
    this.router.navigateByUrl('/list?ingredient=' + e.target.innerText);
  }

}
