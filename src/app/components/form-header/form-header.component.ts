import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
})
export class FormHeaderComponent {
  @Input()
  title = '';
}
