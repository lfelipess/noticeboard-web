import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoticeComponent,
    NoticeListComponent,
    NoticeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ NoticeListComponent, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
