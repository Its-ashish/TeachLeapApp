import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [UploadImageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [UploadImageComponent]
})
export class SharedModule { }
