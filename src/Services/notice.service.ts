import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http: HttpClient) { }

  createNotice(notice: object) : Observable<any>{
    return this.http.post('http://localhost:8090/notice', notice);
  }

  getNotice(id: Number) : Observable<any>{
    return this.http.get('http://localhost:8090/notice/'+ id);
  }

  getAllNotices() : Observable<any>{
    return this.http.get('http://localhost:8090/notice');
  }

  updateNotice(id: Number, value: any) : Observable<any>{
    return this.http.put('http://localhost:8090/notice/'+ id, value);
  }

  deleteNotice(id: Number) : Observable<any>{
    return this.http.delete('http://localhost:8090/notice/'+ id);
  }
}
