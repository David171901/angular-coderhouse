import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
})
export class FormFooterComponent {
  @Input()
  label = "";

  @Input()
  invalid = true;

  @Output()
  clickEvent = new EventEmitter();
}
