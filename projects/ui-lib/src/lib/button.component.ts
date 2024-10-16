import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { webLightTheme } from '@fluentui/tokens';
import { setTheme } from '@fluentui/web-components';
import '@fluentui/web-components/button.js';
setTheme(webLightTheme);


import { ButtonDefinition, FluentDesignSystem } from '@fluentui/web-components';

ButtonDefinition.define(FluentDesignSystem.registry);
export type ButtonAppearance = 'primary' | 'outline';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<fluent-button [appearance]="appearance"
  [attr.disabled]="disabled ? true : null"
>{{buttonContent}}</fluent-button>`,
  // styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() appearance: string = 'primary';
@Input() disabled: boolean = false;
@Input() buttonContent: string = 'Button Label';
}
