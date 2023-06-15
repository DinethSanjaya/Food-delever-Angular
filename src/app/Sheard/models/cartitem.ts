import { Foods } from "./food";

export class cartitem{
    price: any;
    foods: any;
    constructor(food:Foods){
        this.food=food;
        this.price()
    }
    food:Foods
    quantity:number =1;
    getprice(): Number{
       return this.foods.price * this.quantity;
    }
}