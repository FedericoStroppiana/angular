import { Component, OnInit } from "@angular/core";
import { APIService } from "src/app/api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public api: APIService) {}

  ngOnInit(): void {
    this.api.searchByLetter("1");
  }

  tabLabels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "Y",
    "Z",
  ];
  activeTab = "1";

  onSearch(letter: string) {
    this.api.searchByLetter(letter);
    this.activeTab = letter;
  }
}
