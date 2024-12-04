"use strict";(self.webpackChunkmy_workspace=self.webpackChunkmy_workspace||[]).push([[421],{"./projects/ui-lib/src/lib/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),lightTheme=__webpack_require__("./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js"),set_theme=__webpack_require__("./node_modules/@fluentui/web-components/dist/esm/theme/set-theme.js"),button_definition=(__webpack_require__("./node_modules/@fluentui/web-components/dist/esm/button/define.js"),__webpack_require__("./node_modules/@fluentui/web-components/dist/esm/button/button.definition.js")),fluent_design_system=__webpack_require__("./node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");(0,set_theme.Y)(lightTheme.o),button_definition.m.define(fluent_design_system.c.registry);let ButtonComponent=class ButtonComponent{appearance="primary";disabled=!1;buttonContent="Button Label";static propDecorators={appearance:[{type:core.Input}],disabled:[{type:core.Input}],buttonContent:[{type:core.Input}]}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lib-button",standalone:!0,imports:[common.CommonModule],schemas:[core.CUSTOM_ELEMENTS_SCHEMA],template:'<fluent-button [appearance]="appearance"\n  [attr.disabled]="disabled ? true : null"\n>{{buttonContent}}</fluent-button>'})],ButtonComponent);const button_stories={title:"UI/Button",component:ButtonComponent,tags:["autodocs"],argTypes:{}},Primary={args:{appearance:"primary",buttonContent:"Primary Button"}},Secondary={args:{appearance:"outline",buttonContent:"Outline Button"}},__namedExportsOrder=["Primary","Secondary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    appearance: 'primary',\n    buttonContent: 'Primary Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    appearance: 'outline',\n    buttonContent: 'Outline Button'\n  }\n}",...Secondary.parameters?.docs?.source}}}}}]);