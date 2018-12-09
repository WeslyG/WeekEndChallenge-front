import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questList = [
    {
      id: "5c09ce861c160353f085cee8",
      name: "Мой первый квест",
      tag: "it",
      price: 100,
      description: "что бы его решить тебе нужно ввести hey"
    },
    {
      id: "5c09ceab1c160353f085cee9",
      name: "Это квест 2",
      tag: "it",
      price: 100,
      description: "У него ответ другой можешь ввести zzzz"
    }
  ]

  questMock = {
      id: "5c09ceab1c160353f085cee9",
      name: "Это квест 2",
      tag: "it",
      price: 100,
      description: "У него ответ другой можешь ввести zzzz"
    }


}
