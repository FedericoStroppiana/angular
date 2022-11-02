import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(public api: APIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api.searchById(this.route.snapshot.params['idDrink']);
    console.log(this.route.snapshot.params['idDrink']);
  }
}
