import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureComponent } from './capture/capture.component';
import { FeedComponent } from './feed/feed.component';
import { MobileDeviceFeaturesComponent } from './mobile-device-features/mobile-device-features.component';


const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'capture', component: CaptureComponent },
  { path: 'mbdf', component: MobileDeviceFeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
