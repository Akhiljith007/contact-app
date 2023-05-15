import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contact: any = {}
  errorMsg: string = ""
  group: any = {}

  // angular ile path parameter fetch cheiyan angular il ulla oru class aanu Activatedroute, 
  constructor(private api: ApiService, private viewRouter: ActivatedRoute) {
  }

  ngOnInit(): void {

    // get contact id from its url
    this.viewRouter.params.subscribe((data: any) => {

      // destructuring data object

      
      const { id } = data
      console.log(id);
  
      // api call to get a particular contact details

      this.api.viewContact(id).subscribe({
        next: (response: any) => {
          console.log(response);
          // ivide cheiyunne matte api il ninnu group number maathre kittu aa number veche ethu groupil aanu iyale varunne ariyan aanu vre group api serviec il call cheiyunne ennittu aa api vechu ivide kittiya id um group name um compare cheithu aa group id aayittu match cheiyunne group name settakunne aanu ivide thaazhe cons{name vre ulla step start cheithekunne const{groupId} il ninnu angne groupId il respponse vekkan kaaranam response il aaanu aa api de full etails vrunne athil ninnu id number maathram kittan aanu groupid select aakiye aa groupid um oinnedu api il i=ulla groups enna api il ulla groupname um compare cheitheanu pinnedu settakiyekunne}
          const { groupId } = response
          this.api.getGroup(groupId).subscribe((data: any) => {
            console.log(data);
            const { name } = data

            this.group = name
          }

          )
          this.contact = response

        },
        error: (err: any) => {
          console.log(err.message);

          this.errorMsg = err.message
        }

      })

    })



  }

}
