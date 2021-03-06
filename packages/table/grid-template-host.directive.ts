import {EmbeddedViewRef, Directive, Input, ViewContainerRef, OnDestroy} from '@angular/core';

@Directive({
    selector: '[gridTemplateHost]'
})
export class GridTemplateHostDirective implements OnDestroy {
    view: EmbeddedViewRef<any>;

    constructor(public viewContainerRef: ViewContainerRef) { }

    @Input('gridTemplateHost') set portal(context: any) {
        if (context.templateRef) {
            if (this.view) {
                this.view.destroy();
                this.view = undefined;
            }
            this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
        }
    }

    ngOnDestroy() {
        //if (this.viewContainerRef)
        //    this.viewContainerRef.clear();
    }
}
