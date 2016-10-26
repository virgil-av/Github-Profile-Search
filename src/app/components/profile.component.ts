import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: any[];
  repos: any[];
  username: string;


  constructor(private _githubService: GithubService) { }

  ngOnInit() {


  }



  searchUser(){
    setTimeout(() =>{

      if(!this.username){
        return
      }

      this._githubService.getUser(this.username)
        .subscribe( res => this.user = res )

      this._githubService.getRepos(this.username)
        .subscribe( res => this.repos = res )

    }, 700);



  }


}
