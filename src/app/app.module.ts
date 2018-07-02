import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
