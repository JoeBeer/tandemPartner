import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

// components
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchItemComponent } from './components/match-item/match-item.component';
import { ChatroomListComponent } from './components/chatroom-list/chatroom-list.component';
import { ChatroomItemComponent } from './components/chatroom-item/chatroom-item.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ImpressumPageComponent } from './components/impressum-page/impressum-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserStoreService } from './services/user-store.service';
import { MatchStoreService } from './services/match-store.service';

// imports for firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    HomeComponent,
    LoginPageComponent,
    MatchListComponent,
    MatchItemComponent,
    ChatroomListComponent,
    ChatroomItemComponent,
    ProfilePageComponent,
    SearchPageComponent,
    ResultPageComponent,
    ImpressumPageComponent,
    AboutPageComponent,
    ErrorPageComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [
    UserStoreService,
    AuthService,
    AuthGuard,
    MatchStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
