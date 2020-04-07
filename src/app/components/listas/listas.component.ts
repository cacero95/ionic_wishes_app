import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/List_model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  lists:List[] = [];
  @Input() finished = true;
  @ViewChild(IonList,{static:true}) list:IonList;
  constructor(private wish:WishesService,
    private router:Router,
    private alert:AlertController) { }

  ngOnInit() {
    this.lists = this.wish.lists;
  }
  select_list(list_id){
    let check_tab = this.finished === true ? 'tab2' : 'tab1';
    this.router.navigateByUrl(`/tabs/${check_tab}/add/${list_id}`);
  }
  delete_list(item){
    let index = this.lists.findIndex((element)=>{
      return item.id === element.id
    });
    this.lists.splice(index,1);
    this.wish.save_storage();
  }
  async edit_list_name(item){
    let alert = await this.alert.create({
      header:'Update title',
      animated:true,
      mode:'ios',
      inputs:[
        {
          name:'title',
          value:item.title
        }
      ],
      buttons:[
        {
          text:'cancel',
          role:'cancel'
        },
        {
          text:'next',
          handler:(data)=>{
            if(data.title.length === 0){
              return;
            }
            item.title = data.title;
            this.wish.save_storage();
            /**
             * the closedSlidingItems close every item on a ion-list
             */
            this.list.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
    


  }
}
