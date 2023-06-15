import { Injectable } from '@angular/core';
import { Cart } from '../Sheard/models/cart';
import { Foods } from '../Sheard/models/food';
import { cartitem} from '../Sheard/models/cartitem';


@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoodbyId(id: any): Foods {
    throw new Error('Method not implemented.');
  }
    private cart:Cart = new Cart();
 addToCart(food:Foods) :void{
    let cartItem =this.cart.items.find(item=>item.food.id===food.id)         // add to cart
    if(cartItem){
        this.changeQuantity(food.id , cartItem.quantity+1)
        return;
    }
    
    this.cart.items.push(new cartitem(food));
 }
  removeFromCart(foodid:number):void{
    this.cart.items = this.cart.items.filter(item=>Foods.id !=foodid)    // remove to cart
  }
  changeQuantity(quantity:number,foodid:number){
    let cartItem = this.cart.items.find(item=>item.food.id === foodid)
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
getcart():Cart{
    return this.cart;
}
  }