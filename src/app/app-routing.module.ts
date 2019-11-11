import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path: 'home', component: CurrencyComponent},
  {path: 'contacts', component: ContactComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }