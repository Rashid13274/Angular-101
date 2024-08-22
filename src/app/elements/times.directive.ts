import { Directive,TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainter: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainter.clear();

    for(let i = 0; i < times; i++) {
      this.viewContainter.createEmbeddedView(this.templateRef, {});
    }
  }

}
