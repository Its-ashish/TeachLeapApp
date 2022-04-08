import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from 'src/app/service/file-upload-service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  fileName: any = 'assets/MicrosoftTeams-image (6).png';
  msg: any;
  constructor(private uploadImageService: FileUploadServiceService) { }

  ngOnInit(): void {
    this.getUserImage();
  }

  getUserImage() {
    this.uploadImageService.getImage().subscribe(res => {
      const file: File = res;
      this.fileName = res.imageUrl;

    })
  }

  processImage(e: any) {
    let payload = new FormData();
    let file: File = e?.target?.files[0];
    if (!e?.target?.files[0]?.type.match(/image\/*/)) {
      this.msg = "Not an image";
      return;
    } else {
      this.msg = "";
    }
    payload?.append('file', file);
    this.imageProcessor(e?.target?.files[0]);
    this.uploadImageService.uploadImage(payload).subscribe(res => {
      console.log(res, '1234555555555555');
    });
  }

  imageProcessor(data: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fileName = reader.result;
    }
    reader.readAsDataURL(data);

  }

}
