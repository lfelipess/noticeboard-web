import { Component, OnInit } from '@angular/core';
import { Notice } from '../Notice';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from 'src/Services/notice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notice-details',
  templateUrl: './notice-details.component.html',
  styleUrls: ['./notice-details.component.css']
})
export class NoticeDetailsComponent implements OnInit {

  noticeId: Number;
  isReadOnly: boolean;
  notice: Observable<Notice>;
  titleNull : boolean;
  descNull : boolean;

  constructor(private noticeService: NoticeService, private activeRoute: ActivatedRoute, private router : Router) {
   }

  ngOnInit() {
    this.noticeId = new Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.isReadOnly = this.activeRoute.snapshot.paramMap.get('edit') == 'true' ? true : false ;
    this.getNotice();
    
  }

  getNotice(){
    this.noticeService.getNotice(this.noticeId).subscribe(notice => {
      this.notice = notice;
    });
  }

  editNotice(notice: Notice) {
    if(!notice.title && !notice.description){
      this.titleNull = true;
      this.descNull = true;
    } else if(!notice.title){
      this.titleNull = true;
      this.descNull = false;
    } else if(!notice.description){
      this.titleNull = false;
      this.descNull = true;
    } else {
      this.noticeService.updateNotice(notice.id, notice).subscribe(updatedNotice =>{
        console.log(updatedNotice);
        this.router.navigate(['']);
      });
    }
  }
}
