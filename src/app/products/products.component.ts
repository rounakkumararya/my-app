import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    { id: 1, name: "Minimalist analog watch", price: '109', color: 'black', available: 'Available', image: '../../assets/watch.jpg' },
    { id: 2, name: "Hisense Ultra Tv", price: '3339', color: 'Black', available: 'Available', image: '../../assets/tv.jpg' },
    { id: 3, name: 'Apple Iphone 12', price: '1855', color: 'Black', available: 'Not Available', image: '../../assets/iphone.jpg' },
    { id: 4, name: 'Lg washing Machine', price: '454', color: 'White', available: 'Available', image: '../../assets/washingMachine.jpg' },
    { id: 5, name: 'Lg Refrigerator', price: '6532', color: 'White', available: 'Not Available', image: '../../assets/fridge.jpg' },
    { id: 6, name: 'DELL inspiration Laptop', price: '1345', color: 'White', available: 'Available', image: '../../assets/laptop.jpg', }
  ]

}
