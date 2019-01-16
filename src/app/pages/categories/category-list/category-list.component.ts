import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../.././../shared/components/base-resources-list/base-resource-list.component"

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends BaseResourceListComponent<Category>{

  constructor(private categoryService: CategoryService) {
    super(categoryService);
   }

}
