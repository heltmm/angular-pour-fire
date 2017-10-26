import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegDisplayComponent } from './keg-display/keg-display.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from './app.routing';
import { KegDetailComponent } from './keg-detail/keg-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KegDisplayComponent,
    AdminComponent,
    KegDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
