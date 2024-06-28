import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { DefaultHeaderComponent } from './container/default-header/default-header.component';
import { HomeComponent } from './component/home/home.component';
import { ScrollToTopComponent } from './container/scroll-to-top/scroll-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { SidebarModule } from '@coreui/angular';
import { DefaultFooterComponent } from './container/default-footer/default-footer.component';
import { AboutComponent } from './component/about/about.component';
import { FeatureComponent } from './component/feature/feature.component';
import { ContactComponent } from './component/contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DefaultHeaderComponent,
    HomeComponent,
    ScrollToTopComponent,
    DefaultFooterComponent,
    AboutComponent,
    FeatureComponent,
    ContactComponent,
    PrivacyPolicyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IconModule,
    SidebarModule,
    NgScrollbarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'vi', 
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
