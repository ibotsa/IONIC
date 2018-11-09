import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { GalleryPage } from '../gallery/gallery';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GalleryPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
