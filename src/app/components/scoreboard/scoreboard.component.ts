import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { QuestListModel } from 'src/app/models/questList.model';
import { UserService } from '../../services/user.service';

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
        for (let i = 0, len = res.length; i < len; i++) {
          this.ELEMENT_DATA.push(res[i]);
        }
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
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
