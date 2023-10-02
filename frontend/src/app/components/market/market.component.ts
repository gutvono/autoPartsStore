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
    public selectedCategory:string = '';
    public allAutoParts: AutoPart[] = [];
    public filteredAutoParts: AutoPart[] = [];

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

    applyFilter(category: string | null): void {
        if (category) {
            this.selectedCategory = category;
        }

        console.log(this.partName?.value, this.maxPrice?.value, this.selectedCategory);
        
        this.filteredAutoParts = this.allAutoParts.filter((part: AutoPart) => {
            
        })

        console.log(this.allAutoParts);
        console.log(this.filteredAutoParts);
    };

    filterReset(): void {
        this.partName?.setValue('');
        this.maxPrice?.setValue(9999);
        this.selectedCategory = '';
    };
}
