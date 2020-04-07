import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/List_model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private wish:WishesService,
    private router:Router, private alert:AlertController) {
    
  }
  async add_toList(){
    let alert = await this.alert.create({
      header:'New List',
      mode:'ios',
      animated:true,
      inputs:[
        {
          type:'text',
          name:'title',
          placeholder:'List name'
        }
      ],
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Next',
        handler:(data)=>{
          if(data.title.length > 0){
            let list_id = this.wish.create_list(data.title);
            this.router.navigateByUrl(`/tabs/tab1/add/${list_id}`);
          }
          else {
            return;
          }
        }
      }
    ]
    });
    alert.present();
    //
  }
  
}
