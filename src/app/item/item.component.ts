import { Component, OnInit, Input } from '@angular/core';
import { FoodProperties } from '../food-properties';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	@Input() item: FoodProperties;

clickVote(){
this.item.submissionCount = this.item.submissionCount + 1;
}
  constructor() { }

  ngOnInit() {
  }

}
