import { Component, OnInit } from '@angular/core';
import { QuestService } from '../../services/quest.service';
// import { Quest } from '../../models/quest.model'

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  constructor(
    private questServices: QuestService
  ) { }


  ngOnInit() {
  }

  // какой то массив с категориями
  // симулятор api
//   categoryList = [
//     {
//       'category': 'it',
//       'quests': [
//         {
//           id: '12418hjfg123',
//           name: 'Мой первый квест',
//           tag: 'it',
//           price: 100,
//           description: 'что бы его решить тебе нужно ввести hey'
//         },
//         {
//           id: '12418hjfg23',
//           name: 'Мой второй квест',
//           tag: 'it',
//           price: 100,
//           description: 'что бы его решить тебе нужно ввести ZZZ'
//         },
//         {
//           id: '12418h3',
//           name: 'Мой второй квест',
//           tag: 'it',
//           price: 1200,
//           description: 'что бы его решить тебе нужно ввести AAA'
//         }
//       ]
//     },
//     {
//       'category': 'soft',
//       'quests': [
//         {
//           id: '12418hjfg123',
//           name: 'Мой первый квест',
//           tag: 'it',
//           price: 100,
//           description: 'что бы его решить тебе нужно ввести hey'
//         },
//         {
//           id: '12418hjfg23',
//           name: 'Мой второй квест',
//           tag: 'it',
//           price: 100,
//           description: 'что бы его решить тебе нужно ввести ZZZ'
//         },
//         {
//           id: '12418h3',
//           name: 'Мой второй квест',
//           tag: 'it',
//           price: 1200,
//           description: 'что бы его решить тебе нужно ввести AAA'
//         }
//       ]
//     }
//   ]
}
