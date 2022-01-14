import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
{
path: 'list',
component: SessionItemListComponent},
{
path: 'admin',
loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
},
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
declarations: [
AppComponent,
SessionItemComponent,
SessionItemListComponent,
InscriptionDisabledDirective,
PageNotFoundComponent,
],
imports: [RouterModule.forRoot(
appRoutes,
{ enableTracing: true }
),
BrowserModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
