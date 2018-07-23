import { Component, OnInit } from '@angular/core';
import { FoodProperties } from '../food-properties';
//import { Item } from './item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
//this.item = ItemProperties[];
  constructor() { }

  ngOnInit() {
  }
}
