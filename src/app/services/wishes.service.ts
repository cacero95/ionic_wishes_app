import { Injectable } from '@angular/core';
import { List } from '../models/List_model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  lists:List[] = [];
  constructor() {
    this.load_storage();
  }
  create_list(title:string){
    let newList = new List(title);
    this.lists.push(newList);
    this.save_storage();
    return newList.id;
  }
  save_storage(){
    localStorage.setItem('data',JSON.stringify(this.lists));
  }
  load_storage() {
    if (localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
  get_itemById(id:string | number){
    id = Number(id);
    return this.lists.find((element)=>{
      return element.id === id;
    });
  }
}