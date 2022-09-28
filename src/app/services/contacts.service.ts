import { Injectable } from '@angular/core';
import { lista_contactos } from '../mocks/contacts/contacts.mock';
import { IContacto } from '../models/contact.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  listacontactos:IContacto[]=lista_contactos;
  constructor() { }

  obtenerContacto(sexo?:string): Promise<IContacto[]>{
    if (sexo== 'hombre' || sexo=='mujer'){
      let listafiltrada:IContacto[] =this.listacontactos.filter((contacto)=>contacto.sexo==sexo);
      return Promise.resolve(listafiltrada);
    }else if(sexo=='todos'){
      return Promise.resolve(this.listacontactos)

    }else{
      return Promise.reject('filtro no valido');

    }
  }
}
