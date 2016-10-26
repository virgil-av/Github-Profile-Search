import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '994ff214532d0d8217c3';
  private client_secret = '82cd8604c527e1046d9456d5ab5270f1e49ed9f1';


  constructor(private _http: Http) {

  }

  getUser(username: string){
    return this._http.get('https://api.github.com/users/' + username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret  )
      .map(res => res.json());
  }

  getRepos(username: string){
    return this._http.get('https://api.github.com/users/' + username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret  )
      .map(res => res.json());
  }

}
