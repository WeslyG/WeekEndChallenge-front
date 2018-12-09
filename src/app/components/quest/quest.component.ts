import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  answerForm: FormGroup;

  ngOnInit() {
    this.answerForm = this.fb.group({
      answer: ['', [Validators.required]],
    });
  }

  quest = {
    name: 'First quest',
    discription: 'Это первый квест, и тут должно быть его описание, его должно быть много, потому что я лью воду, дабы проверить работу формы',
    price: 200
  }

}