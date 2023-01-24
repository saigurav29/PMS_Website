import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pms';
  // @ViewChild('video') video:any; 
  // stream:any="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
  // ngAfterViewInit() {
  //   let _video=this.video.nativeElement;
  //     if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //       navigator.mediaDevices.getUserMedia({ video: true })
  //                           .then(stream => {
  //                             _video.src = window.URL.createObjectURL(this.stream);
  //                             _video.play();
  //                           })
  //                         } 
  // } 
}
