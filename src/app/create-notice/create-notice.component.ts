import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../Services/notice.service';
import { Notice } from '../Notice';
import { Router } from '@angular/router';
import { NoticeListComponent } from '../notice-list/notice-list.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {

  notice: Notice = new Notice();
  formNotice: FormGroup;
  titleNull : boolean;
  descNull : boolean;

  constructor(private noticeService: NoticeService, private router: Router, private noticeList : NoticeListComponent, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.formNotice = this.formBuilder.group({
        title:['', Validators.required],
        description:['', Validators.required]
      })
  }

  save(){
    if (!this.formNotice.invalid){
      this.noticeService.createNotice(this.notice).subscribe(res => {
        this.router.navigate(['']);
      });
    } else {
      this.titleNull = !this.notice.title ? true : false;
      this.descNull = !this.notice.description ? true : false;
    }
  }

}
