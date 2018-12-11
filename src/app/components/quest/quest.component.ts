import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../services/quest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Response } from '@angular/http';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private questServices: QuestService
  ) { }

  answerForm: FormGroup;
  isLoading = false;
  quest = {
    name: '',
    price: 0,
    description: ''
  };

  ngOnInit() {
    this.isLoading = true;
    this.answerForm = this.fb.group({
      answer: ['', [Validators.required]],
    });
    this.questServices.getOneQuest('5c09ce861c160353f085cee8').subscribe(res => {
      this.isLoading = false;
      this.quest = {
        name: res.name,
        price: res.price,
        description: res.description
      };
    },
      (error: Response) => {
        this.isLoading = false;
        this.snackBar.open(error.text(), 'Ok', {
          duration: 3000,
        });
      });
  }
}
