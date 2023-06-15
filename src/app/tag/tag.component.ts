import { Component, OnInit } from '@angular/core';
import { Tag } from '../Sheard/models/tag';
import { Foods } from '../Sheard/models/food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  tags:Tag[] =[];

  constructor(private fs:FoodService){}
  ngOnInit(): void {
    this.tags = this.fs.getAllTag();
  }

}
