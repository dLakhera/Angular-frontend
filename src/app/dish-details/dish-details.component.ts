import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dish: Dish;  
  constructor(private dishService: DishService, private route: ActivatedRoute,
  private location: Location) { }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id.toString());
  }

  goBack():void {
    this.location.back();
  }

}
