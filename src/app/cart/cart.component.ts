import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart = [{ 'cart item': 'cart item' }];

  constructor() {}

  ngOnInit(): void {}
}
