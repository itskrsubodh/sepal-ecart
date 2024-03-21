import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailComponent } from './feature/userdetail/userdetail.component';
import { UserformComponent } from './feature/userform/userform.component';

@NgModule({
  declarations: [AppComponent, UserdetailComponent, UserformComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
