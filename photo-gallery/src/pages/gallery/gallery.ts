import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  constructor(public navCtrl: NavController, public photoService: PhotoProvider) {
  }
  
  ngOnInit() {
    this.photoService.loadSaved();
 }
}
