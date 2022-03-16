import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  fileName: any = 'assets/MicrosoftTeams-image (6).png';
  msg:any;
  constructor() { }

  ngOnInit(): void {
  }

  processImage(e:any){
    console.log(e, '11111');
    if(!e?.target?.files[0]?.type.match(/image\/*/)){
      this.msg = "Not an image";
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e?.target?.files[0]);
    reader.onload = (e) => {
      console.log(reader.result);
      this.fileName = reader.result;
    }
  }

}
