import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id : number;
    name: string;
    image: string;
    description: string;

    constructor(private router: Router,
                private route: ActivatedRoute){}
    
    ngOnInit(): void{
        this.id = this.route.snapshot.params['id'];
        this.route.snapshot.queryParams
            .subscribe((data)=>{
                this.name = data['name'];
                this.image = data['img'];
                this.description = data['desc'];
            });
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}