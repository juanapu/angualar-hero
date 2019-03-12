import { Directive, Input, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[highlight]'})
export class highlightDirective implements OnInit {
    constructor(
        private elementRef: ElementRef<any>,
        private viewContainer: ViewContainerRef) { }
    
    color: string = 'green';

    @Input()
    set highlight(color: string){
        // this.elementRef.nativeElement.style.backgroundColor = color;
        this.color = color;
    }

         ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = this.color;
        console.log('-- directives --')
     } 

}