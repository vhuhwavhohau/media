import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureAudioOptions, CaptureVideoOptions } from '@ionic-native/media-capture';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private mediaCapture: MediaCapture) {

  }
  Photo(){
    let options: CaptureImageOptions = {limit:1};
    this.mediaCapture.captureImage(options)
    .then(
      (data : MediaFile[]) => console.log(data),
      (err: CaptureError) => console.error(err)
    );
  }
  Audio(){
    let options: CaptureAudioOptions = {limit:1};
    this.mediaCapture.captureAudio(options)
    .then(
      (data : MediaFile[]) => console.log(data),
      (err: CaptureError) => console.error(err)
    );
  }
  Vedio(){
    let options: CaptureVideoOptions = {limit:1};
    this.mediaCapture.captureVideo(options)
    .then(
      (data : MediaFile[]) => console.log(data),
      (err: CaptureError) => console.error(err)
    );
   }

}
