import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})

export class AllContactsComponent implements OnInit {

  // SEARCH BOX SET cheitha variable aanu
  searchKey=""
  // to hold all contacts 
  allContacts: any = []
  isLoading: boolean = true
  errorMsg: string = ''

  constructor(private api: ApiService) {}



  ngOnInit(): void {
    this.getAllContacts() }

  getAllContacts(){this.api.getAllContacts().subscribe({

    next: (response: any) => {
      console.log(response);
 // settimeout koduthe aa spinner karangunne kaanana 2sec delay koduthale kaanan pattu aa delay illenkil page fastil load aakuva appo spinner karangunne kaanan patunilla ata angne cheithe

      setTimeout(() => {
        this.allContacts = response
this.isLoading = false }, 2000);
},

    error: (err: any) => {
      console.log(err.message);

      // error vrumpo aa error ne kaaranam kaanikn aanu errorMsg enna variable create cheithekkunne
      this.errorMsg = err.message
      // allathe error okke vrumpolum ee spinner kidannu karangathirikn aanu isloading false aayi settakiythu
      this.isLoading = false

    }} )
  }

  // 
  deleteContact(id:any){

    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{this.getAllContacts()}
    })
  }


}
