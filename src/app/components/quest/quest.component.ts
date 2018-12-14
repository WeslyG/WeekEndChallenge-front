import { Response } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { QuestService } from '../../services/quest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private questServices: QuestService,
    private location: Location
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
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.questServices.getOneQuest(id).subscribe(res => {
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

  goBack(): void {
    this.location.back();
  }

}
