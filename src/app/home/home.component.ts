import { Component, OnInit } from '@angular/core';
import { FoodProperties } from '../food-properties';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// title = 'HowLongDoesFoodLast';

	homeItems : FoodProperties[] = [
		{
		id: 1,
		item: 'chicken',
		expirationDays: 3,
		fullImagePath: './assets/chicken.png',
		submissionCount: 1
		},
		{
		id: 2,
		item: 'ground beef',
		expirationDays: 3,
		fullImagePath: './assets/beef.jpg',
		submissionCount: 1
		},
		{
		id: 8,
		item: 'mayonaise',
		expirationDays: 180,
		fullImagePath: './assets/mayo.jpg',
		submissionCount: 1
		}
	];
  constructor() { }

//	foodproperties = 'FoodProperties';
  ngOnInit() {
  }

}
