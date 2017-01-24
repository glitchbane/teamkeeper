

import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";

import {Observable} from "rxjs";
import {config} from "../../app.config";
import {User} from "../../features/user/user.model";
import {isNullOrUndefined} from "util";


@Injectable()
export class UserDataService {

  constructor(public http: Http) {}
  private userUrl = config.API_URL + '/user';

  private getOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers});
    return options;
  }

  loginUser(user: User): Observable<User> {

    let body = {
      "email": user.email
    }

    let headers = new Headers({ 'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(this.userUrl + '/login', body, options)
      .map((response: Response) => response.json()["obj"])
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addOrUpdateUser(user: User): Observable<User> {
    if (!isNullOrUndefined(user._id)) {

      return this.http.patch(config.API_URL + '/user/' + user._id, JSON.stringify(user), this.getOptions())
        .map((response: Response) => response.json())

    } else {

      return this.http.post(config.API_URL + '/user', JSON.stringify(user), config.JSON_HEADER)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }
  }

  logoutUser(user: User): Observable<any> {
    let body = {
      "email": user.email
    }

    let headers = new Headers({ 'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers});

    const urlFull = config.API_URL + '/user/logout';

    return this.http.post(urlFull, body, options)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
