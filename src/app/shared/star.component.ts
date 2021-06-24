import { Component, OnChanges, 
    OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: [
            './star.component.css'
        ]
})

export class StarComponent implements OnChanges,OnInit{
    //@Input, is a decorator which is required in the 
    //child component to receive data from parent
    @Input() rating: number;
    // "ratingClicked" must be an object of EventEmitter inorder to emit data 
    //back to Parent Component
    @Output() ratingClicked: EventEmitter<string>  = new EventEmitter<string>();
    starWidth: number;
    //This is always called first
    constructor(){
        console.log("********Inside  constructor********");
    }

    //This event is fired when change is detected
    ngOnChanges(){
        console.log("********Inside  onChanges********");
        this.starWidth = this.rating*(89/5)
    }

    //This event is fired after onchanges
    ngOnInit(){
        console.log("********Inside  onInit********");
    }

    //This event is fired when you loose the context
    ngOnDestroy(){
        console.log("********Inside  onDestroy********");
    }

    onStar(){
        //this.ratingClicked
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}