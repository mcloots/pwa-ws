import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { CaptureComponent } from './capture/capture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MatModules = [
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    CaptureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
