import { Component, Input } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoryContent: any[] = this.categoryService.categoryContent;
  @Input() categories: any[] = [];

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
  }

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Souscription à l'observable pour obtenir les catégories
    this.categoryService.getCategories().subscribe((categories: any[]) => {
      this.categoryContent = categories; // Met à jour categoryContent avec les données reçues
    });
  }
}
