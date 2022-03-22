import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ConvertToSpacesPipe } from 'src/app/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
