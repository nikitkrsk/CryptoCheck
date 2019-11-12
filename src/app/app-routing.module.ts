import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { ContactComponent } from './contact/contact.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: 'home', component: CurrencyComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'charts', component: ChartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }