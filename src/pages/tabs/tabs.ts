import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OfficersPage } from '../officers/officers';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OfficersPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
