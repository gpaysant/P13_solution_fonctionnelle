// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importer le module de routage
import { AppComponent } from './app.component';
import { UserIdentityComponent } from './user-identity/user-identity.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms'; // Pour ngModel
import { HttpClientModule } from '@angular/common/http'; // Pour les requêtes HTTP

@NgModule({
  declarations: [
    AppComponent,
    UserIdentityComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importer AppRoutingModule pour les routes
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
