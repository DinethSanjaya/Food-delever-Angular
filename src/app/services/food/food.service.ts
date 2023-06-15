import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Sheard/models/food';
import { Tag } from 'src/app/Sheard/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}


getFoodById(id:number):Foods{
  return this.getAll().find(food => food.id == id)!;

}

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{

    return[
      {name:'All',count:(97)},
      {name:'hamburger',count:12},
      {name:'Pancake',count:12},
      {name:'drinkhotcup',count:11},
      {name:'meatloaf meal',count:8},
      {name:'teriyaki fish',count:15},
      {name:'bread croissant',count:18},
    ]

  };
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'hamburger ',
        price: 'LKR 200/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Bun','Hot','hamburger'],
        imageUrl: '/assets/1.png',
        coockTime: '10am-11am',
        origins: ['italy'],
      },
      {
        id: 2,
        name: 'Pancake',
        price: 'LKR 300/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Pizza','Pancake'],
        imageUrl: '/assets/2.png',
        coockTime: '8am-11pm',
        origins: ['Japan'],
      },
      {
        id: 3,
        name: 'Cake',
        price: 'LKR 400/=',
        favorite: false,
        star: 4.5,
        tags: ['Tea', 'Cacke','Cake'],
        imageUrl: '/assets/3.png',
        coockTime: '10pm-11pm',
        origins: ['India'],
      },
      {
        id: 4,
        name: 'drinkhotcup',
        price: 'LKR 300/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Pizza','Drink','drinkhotcup'],
        imageUrl: '/assets/4.png',
        coockTime: '1pm-2pm',
        origins: ['USA'],
      },
      {
        id: 5,
        name: 'pancakes',
        price: 'LKR 100/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Pizza',"Cacke",'Pancake'],
        imageUrl: '/assets/5.png',
        coockTime: '10pm-11pm',
        origins: ['Sri Lanka'],
      },
      {
        id: 6,
        name: 'meatloaf meal',
        price: 'LKR 300/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Pizza','meatloaf meal','teriyaki fish'],
        imageUrl: '/assets/6.png',
        coockTime: '10pm-12pm',
        origins: ['USA'],
      },
      {
        id: 7,
        name: 'teriyaki fish',
        price: 'LKR 400/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Pizza','teriyaki fish','meatloaf meal'],
        imageUrl: '/assets/7.png',
        coockTime: '9am-11am',
        origins: ['india'],
      },
      {
        id: 8,
        name: 'bread croissant',
        price: 'LKR 100/=',
        favorite: false,
        star: 4.5,
        tags: ['food', 'Pizza','teriyaki fish','bread croissant'],
        imageUrl: '/assets/8.png',
        coockTime: '10am-11am',
        origins: ['italy'],
      },
    ];
  }
}
