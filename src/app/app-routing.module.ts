import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestComponent } from './components/quest/quest.component';
import { QuestListComponent } from './components/quest-list/quest-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Логин'
    }
  },
  { path: 'user/:id',
    component: UserComponent,
    data: {
      title: 'Пользователь'
    }
  },
  {
    path: 'user/me',
    component: UserComponent,
    data: {
      title: 'Пользователь'
    }
  },
  {
    path: 'quest-list',
    component: QuestListComponent,
    data: {
      title: 'Список квестов'
    }
  },
  {
    path: 'quest/:id',
    component: QuestComponent,
    data: {
      title: 'Квест'
    }
  },
  {
    path: '',
    component: ScoreboardComponent,
    data: {
      title: 'Общий счет'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
