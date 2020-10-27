import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNoticeComponent } from './create-notice/create-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NoticeDetailsComponent } from './notice-details/notice-details.component';


const routes: Routes = [
  { path: '', component: NoticeListComponent },
  { path: 'create', component: CreateNoticeComponent },
  { path: 'details/:id/:edit', component: NoticeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
