import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AddressbookModule } from './addressbook/addressbook.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    LayoutModule, 
    AddressbookModule, 
    ReactiveFormsModule, 
    FormsModule,
    RouterModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
