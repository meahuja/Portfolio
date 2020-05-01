import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.featureSelected = new EventEmitter();
    }
    ngOnInit() {
    }
    onSelected(item) {
        this.featureSelected.emit(item);
    }
};
__decorate([
    Output()
], HeaderComponent.prototype, "featureSelected", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map