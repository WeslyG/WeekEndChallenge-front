import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { QuestListModel } from 'src/app/models/questList.model';
import { UserService } from '../../services/user.service';

// { position: 7, name: 'Вова', quest: 14, score: 1000 },
// { position: 1, name: 'Ваня', quest: 1, score: 1000 },
// { position: 2, name: 'Люба', quest: 4, score: 1000 },
// { position: 3, name: 'Петя', quest: 6, score: 1000 },
// { position: 4, name: 'Саша', quest: 9, score: 1000 },
// { position: 5, name: 'Антон', quest: 10, score: 1000 },
// { position: 6, name: 'Виталя', quest: 12, score: 1000 }

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})

export class ScoreboardComponent implements OnInit {

  ELEMENT_DATA = [];
  displayedColumns: string[] = ['position', 'name', 'quest', 'score'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
  ) {}

  isLoading = false;


  ngOnInit() {
    this.userService.getScoreBoard()
      .subscribe(res => {
        this.isLoading = false;
        // console.log(res.length);
        for (let i = 0, len = res.length; i < len; i++) {
          this.ELEMENT_DATA.push(res[i]);
        }
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
        
        // this.ELEMENT_DATA = res;
    },

      (error: Response) => {
        this.isLoading = false;
        console.log(error.text());
        // this.snackBar.open(error.text(), 'Ok', {
        //   duration: 3000,
        // });
      });
  }


  }
}



