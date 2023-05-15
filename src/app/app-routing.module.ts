import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  // all contacts : path- https://localhost:4200
  {path:'',component:AllContactsComponent},

  // add-contact: : path- https://localhost:4200/add-contacts

  {path:'add-contact',component:AddContactsComponent},

  // path inte avide / colon koduthekunne athu parameter aanu angular ne manasilakn vendi aanu kaaranam aa  id use cheithu adutha pageil aavisham und athu kondannu

  //  -view-contact  : path- https://localhost:4200/view-contact/id

  {path:'view-contact/:id',component:ViewContactComponent},

  //    : path- https://localhost:4200/edit-contact /id      
  {path:'edit-contact/:id',component:EditContactComponent},

  // page not found
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
