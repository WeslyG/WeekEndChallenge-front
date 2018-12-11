import { Component, OnInit } from '@angular/core';
import { QuestListService } from '../../services/questList.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Response } from '@angular/http';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  constructor(
    private questListServices: QuestListService,
    private snackBar: MatSnackBar
  ) { }

  isLoading = false;
  questList = [];

  ngOnInit() {
    this.isLoading = true;
    this.questListServices.getQuestList().subscribe(res => {
      this.isLoading = false;
      this.questList = res;
    },
      (error: Response) => {
        this.isLoading = false;
        this.snackBar.open(error.text(), 'Ok', {
          duration: 3000,
        });
      });
  }
