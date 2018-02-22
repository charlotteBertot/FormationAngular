import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CollectionService } from './core/services/collection/collection.service';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.prod';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    NgbModule.forRoot(),
    SharedModule,
    PageNotFoundModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
