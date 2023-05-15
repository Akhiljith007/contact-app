import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { contactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

// contactschema ennu type vekkn kaaranam nokku nammle contactschema nneoru file undakitund athill athill ooro value engna save aaknde reethi okke  vechitund athkonda contact schem ivide veche
   contact:contactSchema={}

   groups:any=[]

  constructor(private editActivatedRoute:ActivatedRoute,private Api:ApiService,private editRouter:Router ){}
  ngOnInit(): void {
   

    // ivide cheithekkunne ee page load aakumpo aa page inte url mukalil vrum aa mukaliopathparameteril ee vannekunne pageil ulla aalde Id kaanum soo aa id access cheiyan aanu Activate route cheithe athile property params use cheithu,,,,oru page load aakyumpo aadyam vrunna kaaryamanu ngonit il vrunne athukondannu ngonit vechekumnme
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{

        // ivide curlybracket inte akathu id ennu  vechekkunne chumma oru variable alla approuteril path editcontact component ine inte pathil url ne id settakitund athukondanu ivideyum aa id ennu thanne vcehkunne
        const {id}=pathParameter
        console.log(pathParameter);

        // call view contact Api

        // service view contact ne oru function create cheithittund appo aa function ivide call cheitha aa Id ile ulla details fetch cheiuan pattum kaarnam aa function id kittan vndi ulla ithill aanu create cheiuthekunne ninakke service il nokkiya kaanam
        // So service kittan vendi data injection service ne kittan ivide cheithu
        this.Api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
          }
        })


        
      }
   
      
    })
  

    // html pageil group enna column set cheiyn vendi aanu ingne cheithekunne
  // get all groups
  this.Api.getGroups().subscribe({
    next:(allgroups:any)=>{

      this.groups=allgroups
    }
  })

  
  }


// editcontact

editcontact(id:any){

  // api call to edit contact
  this.Api.editContact(id,this.contact).subscribe({
    next:(response:any)=>{

      console.log(Response);
      
this.editRouter.navigateByUrl("")
    }
  })
} 


}
