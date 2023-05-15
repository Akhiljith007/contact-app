import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


BASE_URL='https://contact-app-9ymu.onrender.com'
  constructor(private http:HttpClient) { }

// to handle error
handleError(error:HttpErrorResponse){
  let errorMsg:string=''


  if(error.error){
    // client error
    errorMsg=`Error: ${error.message}`
  }
  else{
    errorMsg = `status: ${error.status} \n Error: ${error.message}`
  }

  return throwError(()=>errorMsg)
}


  // get all contacts api
  getAllContacts(){

    // api call: url=http://localhost:3000/contacts req: get
    
  return this.http.get(`${this.BASE_URL}/contacts`)
  }

  // view contact of particular  id
  // 

  viewContact(id:any){
    
    // api call: url=http://localhost:3000/contacts/ca1 req: get

   return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }

  // get a particular group

  getGroup(id:any){
//  api call: url=http://localhost:3000/groups/3 req: get
return this.http.get(`${this.BASE_URL}/groups/${id}`)

  }

  // get all groups

  getGroups(){
//  api call: url=http://localhost:3000/groups req: get
   return this.http.get(`${this.BASE_URL}/groups`)
  }

  // add contact

  addcontact(contact:contactSchema){

    // api call

    // post cheiyumpo randu argument must aanu onnnu url onnu body ivide aadhyam url koduthu kazhinju contact ennu kodurhittund athaniu body aa contact il vrunna ellam aa pageil post aakunathu
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }


  // delete contact

  deleteContact(id:any){
// api call server  
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  // edit a contact

  // ivide randu argument vekkn kaaranam first aa url il id kittan second contact enna argument vekkn kaaranam contactschema enna formatil vnm ithu save aakn 

  editContact(id:any,contact:contactSchema){

   return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }





}
