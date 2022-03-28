import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from 'src/app/service/file-upload-service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  fileName: any = 'assets/MicrosoftTeams-image (6).png';
  msg:any;
  constructor(private uploadImageService: FileUploadServiceService) { }

  ngOnInit(): void {
  }

  processImage(e:any){
    let payload = new FormData();
    let file: File = e?.target?.files[0];
    if(!e?.target?.files[0]?.type.match(/image\/*/)){
      this.msg = "Not an image";
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e?.target?.files[0]);
    reader.onload = (e) => {
      this.fileName = reader.result;
    }
    payload?.append('file', file);
    console.log(payload ,'payload');
    this.uploadImageService.uploadImage(payload).subscribe(res => {
      console.log(res);
    });
  }

}
