import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/localStorage.service';
import { DbKeys } from 'src/app/services/db-keys.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})

export class ScoreboardComponent implements OnInit {

  private isUserLogin: Boolean = false;

  isNoneUser: Boolean = false;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['position', 'name', 'questCount', 'score'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
  ) {}

  isLoading = false;


  ngOnInit() {
    this.isUserLogin = this.isLogin();
    this.userService.getScoreBoard()
      .subscribe(res => {
        this.isLoading = false;
        for (let i = 0, len = res.length; i < len; i++) {
          this.ELEMENT_DATA.push(res[i]);
        }
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
        if (this.ELEMENT_DATA.length === 0) {
          this.isNoneUser = true;
        }
    },

      (error: Response) => {
        this.isLoading = false;
        console.log(error.text());
        // this.snackBar.open(error.text(), 'Ok', {
        //   duration: 3000,
        // });
      });
  }

  private isLogin() {
    if (this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
}
