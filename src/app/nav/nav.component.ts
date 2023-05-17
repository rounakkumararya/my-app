import { Component } from '@angular/core';

@Component({
  // selector: 'app-nav', here we used app-nav as html attribute but if we want to use it as html attribute then,
  // we can add it under '[]' (square-braces) 
  // selector: '[app-nav]',
  //to use it as a css class we can add (.) dot before the tag
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent {


  siteName: string = "eShopping"

}
