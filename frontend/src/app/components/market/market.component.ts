import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarketService } from './market.service';
import { AutoPart } from './IAutoPart';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
    public allAutoParts: AutoPart[] = [];
    public autoPartsFilteredByCategory: AutoPart[] = [];
    public filteredAutoParts: AutoPart[] = [];
    public isCategoryApplied: boolean = false;

    filterForm = new FormGroup({
        name: new FormControl(''),
        maxPrice: new FormControl(9999)
    });

    constructor(
        private marketService: MarketService
    ) {}

    ngOnInit() {
        this.marketService.getAllAutoParts()
            .subscribe((parts: AutoPart[]) => {
                this.allAutoParts = parts;
                this.filteredAutoParts = parts;
            });
    };

    get partName() {
        return this.filterForm.get('name');
    };

    get maxPrice() {
        return this.filterForm.get('maxPrice');
    };

    applyFilter(): void {
        const { name, maxPrice } = this.filterForm.value;
        
        const searchWords = name!.toLowerCase().split(' ');

        const arrayToFilter = this.isCategoryApplied ? this.autoPartsFilteredByCategory : this.allAutoParts;
        
        this.filteredAutoParts = arrayToFilter.filter((part: AutoPart) => {
            const partNameLC = part.partName.toLowerCase();
            const carNameLC = part.carName.toLowerCase();
            if (
                searchWords.every(word => partNameLC.includes(word) || carNameLC.includes(word))
                && 
                part.price < maxPrice!
            ) return true;

            return false;
        });
    };

    applyCategoryFilter(category: string): void {
        this.marketService.getAutoPartsByCategoryFilter(category)
            .subscribe((parts: AutoPart[]) => {
                this.autoPartsFilteredByCategory = parts;
                this.filteredAutoParts = parts;
            });

        this.isCategoryApplied = true;
    };

    filterReset(): void {
        this.partName?.setValue('');
        this.maxPrice?.setValue(9999);
        this.isCategoryApplied = false;
        this.filteredAutoParts = this.allAutoParts;
    };
}
