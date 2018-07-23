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
		id: 3,
		item: 'mayonaise',
		expirationDays: 180,
		fullImagePath: './assets/mayo.jpg',
		submissionCount: 1
		},
		{
		id: 4,
		item: 'Apples',
		expirationDays: 90,
		fullImagePath: './assets/apples.png',
		submissionCount: 1
		},
				{
		id: 5,
		item: 'Bread',
		expirationDays: 5,
		fullImagePath: './assets/bread.jpg',
		submissionCount: 1
		}
	];
  constructor() { }

//	foodproperties = 'FoodProperties';
  ngOnInit() {
  }

}
