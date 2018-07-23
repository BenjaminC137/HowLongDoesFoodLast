import { Component, OnInit, Input } from '@angular/core';
import { FoodProperties } from '../food-properties';
import { NewItemModel } from '../new-item-model';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css']
})
export class NewItemFormComponent implements OnInit {
@Input() item: FoodProperties;

  constructor() { }

  ngOnInit() {
  }

}
