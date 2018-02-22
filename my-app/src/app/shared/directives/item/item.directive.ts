import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appItem]'
})
export class ItemDirective implements OnInit {
  @Input('appItem') appItem: string;
  @HostBinding('class') elemClass: string;
  constructor() { }
  ngOnInit() {
    this.elemClass = this.formatClass(this.appItem);
  }

  private removeAccent(state: string): string {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatClass(state: string): string {
    return `state-${this.removeAccent(state).toLowerCase().replace(' ', '')}` ;
  }
}
