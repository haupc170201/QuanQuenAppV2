import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { navItems } from '../../public/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public navItems = navItems;
  currentPage: string = ''
  constructor(private _router: Router) 
  {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentURL = event.url;
        if(currentURL){
          const currentSplit = currentURL.split('/');
          this.currentPage = currentSplit[1]
        }
      }
    });
  }
}
