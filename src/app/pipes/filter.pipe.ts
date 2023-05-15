import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],searchKey:string,propertyname:string): any[] {
    const result:any=[]
    if(!allContacts || searchKey=="" || propertyname==""){
      return allContacts;
    }
  // trim().toLowercase() ennu ingne kodukn kaaranam user searcgh cheiyunne capital letteril aanel angne oru contact illane kaanikku...soo search cheiyunne athum athile contactum ore formatil aakuvanel search cheiyumpo correct aayittu kittum athukondanu propertyname um pinne searchkey kkum ore reethil lowercase koduthe

    allContacts.forEach((item:any)=>{
      if(item[propertyname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
