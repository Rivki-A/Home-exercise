import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllMembersComponent } from './modules/components/all-members/all-members.component';
import { AddMemberComponent } from './modules/components/add-member/add-member.component';
import { EditMemberComponent } from './modules/components/edit-member/edit-member.component';
import { RouterModule } from '@angular/router';
import { MemberDetailsComponent } from './modules/components/member-details/member-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActiveMembersComponent } from './modules/components/active-members/active-members.component';
@NgModule({
  declarations: [
    AppComponent,
    AllMembersComponent,
    AddMemberComponent,
    EditMemberComponent,
    MemberDetailsComponent,
    ActiveMembersComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'allMember', component: AllMembersComponent },
      { path: 'addMember', component: AddMemberComponent },
      { path: 'editMember', component: EditMemberComponent },
      // {path:'memberDetails/:Id',component:MemberDetailsComponent}
      { path: 'activeMember', component: ActiveMembersComponent },
      // ניתן להוסיף נתיבים נוספים כרצונך
    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
