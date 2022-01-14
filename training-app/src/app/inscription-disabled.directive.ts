import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptionDisabled]'
})
export class InscriptionDisabledDirective {
  @HostBinding('class.link-is-disabled') status: boolean | undefined;
  @Input()
set appInscriptionDisabled(value: boolean) {
this.status = value;
}
  constructor() { }

}
