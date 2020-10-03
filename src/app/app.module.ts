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

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

export const cloudinaryLib = {
  Cloudinary: Cloudinary
};

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
    MatModules,
    CloudinaryModule.forRoot(cloudinaryLib, { cloud_name: environment.cloudName, secure: true }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
