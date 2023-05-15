import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import {   Router} from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  groups: any = {}

  // contactschema il ulla ellam contactil kittum id photo angnathe ellam
  contact: contactSchema = {}

  // router ennu prnja injection nadathunne router koduthale navbyurl enna property use cheiyan pattu
  constructor(private APi: ApiService, private addContactRouter:Router) {
    this.contact.groupId = "Select a Group"
  }
  ngOnInit(): void {
    this.APi.getGroups().subscribe({
      next: (Response: any) => {
        console.log(Response);
        this.groups = Response
      },
      error: (err: any) => {
        console.log(err.message);

      }
    })
  }

  // this functtion used to post the details omn local host 300 from the page add contacts

  addContact(contact:contactSchema){
// call api service

    this.APi.addcontact(contact).subscribe({
      next:(response:any)=>{
// data added into server
        console.log(response);
        this.addContactRouter.navigateByUrl('')
        
      },

      error:(err:any)=>{
        console.log(err);
        
      }
     
      
    })
  }


}
