import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as jsonData from '../../jsondata.json';
let BoardComponent = class BoardComponent {
    constructor() {
        this.loadedFeature = 'home';
    }
    ngOnInit() {
        this.stringifyJSON = JSON.stringify(jsonData);
        this.parsedJSON = JSON.parse(this.stringifyJSON);
        console.log(alert(this.parsedJSON.resume));
    }
    onNavigate(feature) {
        this.loadedFeature = feature;
    }
};
BoardComponent = __decorate([
    Component({
        selector: 'app-board',
        templateUrl: './board.component.html',
        styleUrls: ['./board.component.css']
    })
], BoardComponent);
export { BoardComponent };
//# sourceMappingURL=board.component.js.map