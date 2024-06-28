import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { cilMenu } from '@coreui/icons';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.css',
})
export class DefaultHeaderComponent implements OnInit, AfterContentInit {
  currentPage = '';
  LANGUAGE = false;
  @Input() sidebarId: string = "sidebar";

  constructor(private router: Router, public iconSet: IconSetService, private translate: TranslateService) {
    this.iconSet.icons = { cilMenu };

    translate.setDefaultLang('vi');
  }

  ngAfterContentInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentURL = event.url;
        if (currentURL) {
          let arrayPage = currentURL.split('/').reverse();
          this.currentPage = arrayPage[0];
          console.log(this.currentPage);
        }
      }
    });

  }

  ngOnInit(): void {}

  pageHome() {
    this.router.navigate(['home']);
  }

  pageAboutQuanQuen() {
    this.router.navigate(['about']);
  }

  pageFeature() {
    this.router.navigate(['feature']);
  }

  pageContact() {
    this.router.navigate(['contact']);
  }

  btnChangeLanguage(language: boolean, lang : string) {
    this.LANGUAGE = language;
    this.translate.use(lang);
  }
}
