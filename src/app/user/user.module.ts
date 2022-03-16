import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    UserRoutingModule,
    SharedModule 
  ]
})
export class UserModule { }
