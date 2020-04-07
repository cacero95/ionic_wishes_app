import { Component, OnInit, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/List_model';
import { ListItem } from '../../models/wishes_item_model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.page.html',
  styleUrls: ['./add-wish.page.scss'],
})
export class AddWishPage implements OnInit {
  list:List
  description = '';
  constructor(private wish:WishesService,
    private route:ActivatedRoute) { }
  /**
   * On the ViewChild the first argument is the selector html, in this case the id of the item
   * and the second if the item is static, example if the item is conditional with a ngif or ngfor
   * the static is false, otherwise the item is static:true
   *  */  
  @ViewChild('sliding',{static:false}) slide:IonItemSliding;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.list = this.wish.get_itemById(id);
  }
  add_item(){

    if (this.description.length === 0){
      return;
    }
    let newItem = new ListItem(this.description);
    this.list.items.push(newItem);
    this.description = '';
    // ya que javascript manda parametros por referencia no se necesita crear otra funcion 
    // en el services para guardar el item agregado a la lista
    this.wish.save_storage();
  }
  change_state(item:ListItem){
    let count_check = this.list.items.filter((element)=>{
      return !element.complete;
    }).length
    if (count_check === 0){
      this.list.finish_date = new Date();
      this.list.finished = true;
    }
    else {
      this.list.finish_date = null;
      this.list.finished = false
    }
    this.wish.save_storage();
  }
  delete_item(idx){
    this.slide.getSlidingRatio().then((count)=>{
      // if the count is more large than 1.33, it's means the user slide enough the item for delete the item
      if(count > 1.33){
        // on the splice the first argument indicate the start position for delete
        // and the second the quantity of postions for delete
        this.list.items.splice(idx,1);
        this.wish.save_storage();
      }
    })    
  }
  erase_item(idx){
    this.list.items.splice(idx,1);
    this.wish.save_storage();
  }
}
