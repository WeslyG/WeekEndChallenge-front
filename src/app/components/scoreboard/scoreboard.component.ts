import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  quest: number;
  score: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 7, name: 'Вова', quest: 14, score: 1000 },
  { position: 1, name: 'Ваня', quest: 1, score: 1000 },
  { position: 2, name: 'Люба', quest: 4, score: 1000 },
  { position: 3, name: 'Петя', quest: 6, score: 1000 },
  { position: 4, name: 'Саша', quest: 9, score: 1000 },
  { position: 5, name: 'Антон', quest: 10, score: 1000 },
  { position: 6, name: 'Виталя', quest: 12, score: 1000 }
];


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})

export class ScoreboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'quest', 'score'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}



