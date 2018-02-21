import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { EditPartialComponent } from './edit-partial/edit-partial.component';
import { ShowQuotesComponent } from './show-quotes/show-quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

const routes: Routes = [
    {path: 'add', component: AddComponent },
    {path: 'home', component: HomeComponent },
    {path: 'add-quote', component: AddQuoteComponent },
    {path: 'show-quotes/:id', component: ShowQuotesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
