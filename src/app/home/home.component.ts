import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  size: any;
  @ViewChild('span1')  spanList!: ElementRef
  @ViewChild('body1') body!: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    // console.log(this.body.nativeElement.querySelector('h1'))
    this.body.nativeElement.querySelector('h1').addEventListener('mouseenter', (e: any) => {
        for(let i=0;i<this.spanList.nativeElement.children.length ;i++){
          if(this.spanList.nativeElement.children[i].localName === 'span'){
            setTimeout(() => {
              this.spanList.nativeElement.children[i].style.color = 'green';
              this.spanList.nativeElement.children[i].style.fontSize = '50px';
              this.spanList.nativeElement.children[i].style.textTransform = 'uppercase';
              this.spanList.nativeElement.children[i].style.background = '#e7efe6'; 
            }, 120*(i*0.6))
          }
          
        }
    })
    console.log(this.body.nativeElement,'this.body.nativeElement')
    console.log(this.body.nativeElement.querySelectorAll('span'), 'this.body.nativeElement.querySelectorAll("span")')
    console.log(this.body.nativeElement.querySelector('h1'), 'this.body.nativeElement.querySelector("h1")')
    console.log()
    this.body.nativeElement.querySelector('h1').addEventListener('mouseleave', (e: any) => {
      for(let i =0;i<this.spanList.nativeElement.children.length;i++){
        if(this.spanList.nativeElement.children[i].localName === 'span'){
          setTimeout(() => {
            this.spanList.nativeElement.children[i].style.color = 'blue';
            this.spanList.nativeElement.children[i].style.fontSize = '20px';
            this.spanList.nativeElement.children[i].style.textTransform = 'lowercase';
            this.spanList.nativeElement.children[i].style.background = 'white';
          }, 120*(i*0.6))
          
        }
      }
    })
  }

  getPercentage(x: any){
    return x/window.innerWidth;
  }


  ngOnInit(): void {
    // console.log(document.querySelectorAll('span'));
  }

}

