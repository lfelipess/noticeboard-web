import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NoticeService } from 'src/Services/notice.service';
import { Observable } from 'rxjs';
import { Notice } from '../Notice';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {
  notices: Observable<Notice[]>;
  visualization: string;
  myDate = new Date();

  constructor(private noticeService: NoticeService, private router: Router, private datePipe: DatePipe) { 
  }

  ngOnInit() {
    this.getAllNotices();
  }

  public getAllNotices(){
    this.notices = this.noticeService.getAllNotices();
  }

  deleteNotice(id : number){
   this.noticeService.deleteNotice(id).subscribe(res => { 
    this.getAllNotices();
   })
  }

  details(id: Number) {
    this.noticeService.getNotice(id).subscribe(res => {
      if (!res.visualizationDate){
        res.visualizationDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
        this.noticeService.updateNotice(res.id, res).subscribe(updatedNotice =>{
          this.router.navigate(['details', updatedNotice.id, true]);
        });
      } else {
        this.router.navigate(['details', res.id, true]);
      }
    });
  }

  editNotice(id: Number) {
    this.noticeService.getNotice(id).subscribe(res => {
      if (!res.visualizationDate){
        res.visualizationDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
        this.noticeService.updateNotice(res.id, res).subscribe(updatedNotice =>{
          this.router.navigate(['details', updatedNotice.id, false]);
        });
      } else {
        this.router.navigate(['details', res.id, false]);
      }
    });
  }

}
