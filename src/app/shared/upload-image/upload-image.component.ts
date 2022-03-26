import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadServiceService } from 'src/app/service/file-upload-service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  formData: FormGroup =  new FormGroup({});

  fileName: any = 'assets/MicrosoftTeams-image (6).png';
  msg:any;
  constructor(private uploadImageService: FileUploadServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      image: ['']
    })
  }

  processImage(e:any){
    if(!e?.target?.files[0]?.type.match(/image\/*/)){
      this.msg = "Not an image";
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e?.target?.files[0]);
    reader.onload = (e) => {
      this.fileName = reader.result;
    }
    this.formData.patchValue({
      image: e?.target?.files[0]
    })
    console.log(this.formData, 'hi');
    this.uploadImageService.uploadImage(this.formData.value).subscribe(res => {
      console.log(res);
    });
  }

}
