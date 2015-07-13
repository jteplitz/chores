import {Injectable, Http, RequestOptions, Headers, URLSearchParams} from "angular2/angular2";

@Injectable()
export class ChoreStore{
  people: List<Person>;
  
  constructor(public http: Http){
    this.people = users;
  }
  
  changeStatus(choreId: any, status: boolean){
    var options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append("Content-Type", "application/json");
    
    this.http.post(`/chore/${choreId}`, JSON.stringify({
      completed: status
    }), options).subscribe((res) => {
      console.log(res);
    });
  }
}