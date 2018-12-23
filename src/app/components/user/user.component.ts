import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  isLoading = false;
  user = {
    name: '',
    gender: null,
    score: 0,
    questCount: 0,
    quests: []
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(res => {
      this.isLoading = false;
      this.user = {
        name: res.name,
        gender: res.gender,
        score: res.score,
        questCount: res.questCount,
        quests: res.quests
      };
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
