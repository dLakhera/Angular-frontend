import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionsService } from '../services/promotions.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishService:DishService, private promotionService:PromotionsService) { }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
