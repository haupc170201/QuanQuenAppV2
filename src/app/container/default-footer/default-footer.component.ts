import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrl: './default-footer.component.css'
})
export class DefaultFooterComponent {

  constructor(private router : Router){}

  pageAboutQuanQuen() {
    this.router.navigate(['about']);
  }

  pageFeature() {
    this.router.navigate(['feature']);
  }

  pageHome() {
    this.router.navigate(['home']);
  }

  privacyPolicy() {
    this.router.navigate(['privacy-policy']);
  }
}
