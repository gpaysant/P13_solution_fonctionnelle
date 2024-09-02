// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIdentityComponent } from './user-identity/user-identity.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-identity', pathMatch: 'full' },
  { path: 'user-identity', component: UserIdentityComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '/user-identity' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
