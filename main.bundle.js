webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".wrapper {\n  margin: 50px 0;\n}\n\n.wrapper h1 {\n  margin: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "input {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".focused {\n  background-color: whitesmoke;\n}\n\n.wrapper {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  background-color: white;\n}\n\nthead tr th {\n  background-color: rgba(92, 184, 92, 0.1)\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".col-header {\n  cursor: pointer;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1 class=\"text-center\">Focus table</h1>\n  <div class=\"container\">\n    <app-focus-table></app-focus-table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isEdit\" (click)=\"toggleEdit()\">\n  {{value}}\n</div>\n<div *ngIf=\"isEdit\">\n  <input [(ngModel)]=\"newValue\" autofocus />\n</div>\n"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <th *ngFor=\"let col of selectedColumns; let i = index\">\n        <app-header-cell\n          [column]=\"col\"\n          [columns]=\"columns\"\n          (onChanged)=\"saveColumn($event, i)\"\n        ></app-header-cell>\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let tableObject of table; let y = index\">\n      <td *ngFor=\"let col of selectedColumns; let x = index\"\n          [class.focused]=\"isFocus(x,y)\"\n          (click)=\"setFocus(x,y)\"\n          [style.width.%]=\"100/selectedColumns.length\"\n      >\n          <app-cell\n            [isFocus]=\"isFocus(x,y)\"\n            [value]=\"tableObject[col.dataIndex]\"\n            (onChanged)=\"onChanged($event)\"\n          ></app-cell>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-header\" *ngIf=\"!isEdit\" (click)=\"enableEdit()\">{{column.header}}</div>\n\n<div *ngIf=\"isEdit\">\n  <div class=\"form-group row\">\n    <label class=\"col-3 col-form-label\">Header</label>\n    <div class=\"col-9\">\n      <input class=\"form-control\"  [(ngModel)]=\"newColumn.header\"/>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-3 col-form-label\">DataIndex</label>\n    <div class=\"col-9\">\n      <select class=\"form-control\" [(ngModel)]=\"newColumn.dataIndex\">\n        <option [ngValue]=\"c.dataIndex\" *ngFor=\"let c of columns\">{{c.dataIndex}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-inline\">\n    <button class=\"btn btn-success\" (click)=\"confimEdit()\">Save</button>\n    <button class=\"btn btn-danger\" (click)=\"disableEdit()\">Cancel</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Up"] = 38] = "Up";
    KeyCodes[KeyCodes["Down"] = 40] = "Down";
    KeyCodes[KeyCodes["Left"] = 37] = "Left";
    KeyCodes[KeyCodes["Right"] = 39] = "Right";
    KeyCodes[KeyCodes["Esc"] = 27] = "Esc";
    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
})(KeyCodes || (KeyCodes = {}));
/* harmony default export */ __webpack_exports__["a"] = KeyCodes;
//# sourceMappingURL=key-codes.enum.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(144),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__focus_table_focus_table_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autofocus_directive__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__focus_table_cell_cell_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__focus_table_header_cell_header_cell_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__focus_table_focus_table_component__["a" /* FocusTableComponent */],
            __WEBPACK_IMPORTED_MODULE_6__autofocus_directive__["a" /* AutofocusDirective */],
            __WEBPACK_IMPORTED_MODULE_7__focus_table_cell_cell_component__["a" /* CellComponent */],
            __WEBPACK_IMPORTED_MODULE_8__focus_table_header_cell_header_cell_component__["a" /* HeaderCellComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ;
    AutofocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    return AutofocusDirective;
}());
AutofocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[autofocus]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], AutofocusDirective);

var _a;
//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CellComponent = (function () {
    function CellComponent() {
        this.onChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.isEdit = false;
    }
    CellComponent.prototype.ngOnChanges = function () {
        // Refresh isEdit flag after focus changed
        this.isEdit = this.isFocus && this.isEdit;
    };
    CellComponent.prototype.toggleEdit = function () {
        // Make field editable
        if (this.isFocus && !this.isEdit) {
            this.newValue = this.value;
            this.isEdit = true;
            return;
        }
        // Save changes
        if (this.isFocus && this.isEdit) {
            this.isEdit = false;
            this.onChanged.emit(this.newValue);
            return;
        }
        if (!this.isFocus) {
            this.isEdit = false;
            return;
        }
    };
    CellComponent.prototype.keyHandler = function ($event) {
        var keyCode = $event.keyCode;
        switch (keyCode) {
            case __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__["a" /* default */].Esc: {
                this.isEdit = false;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__["a" /* default */].Enter: {
                this.toggleEdit();
                break;
            }
        }
    };
    return CellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], CellComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], CellComponent.prototype, "onChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CellComponent.prototype, "keyHandler", null);
CellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-cell',
        template: __webpack_require__(145),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], CellComponent);

//# sourceMappingURL=cell.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

//# sourceMappingURL=column.interface.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Fake data for demonstration
var table = [
    { type: 'Acer A100', id: 235, price: 1024.34, inStock: true },
    { type: 'Liquid S1 Duo', id: 543, price: 924.34, inStock: false },
    { type: 'iNew V3 (black)', id: 864, price: 527.00, inStock: true },
    { type: 'Acer V370 Liquid E2 Duo', id: 235, price: 2024.34, inStock: true },
    { type: 'Liquid 500', id: 689, price: 824.34, inStock: false },
    { type: 'Acer Z150', id: 297, price: 327.00, inStock: true },
    { type: 'Acer A100', id: 235, price: 1024.34, inStock: true },
    { type: 'Liquid S1 Duo', id: 543, price: 924.34, inStock: false },
    { type: 'iNew V3 (black)', id: 864, price: 527.00, inStock: true },
    { type: 'Acer V370 Liquid E2 Duo', id: 235, price: 2024.34, inStock: true },
    { type: 'Liquid 500', id: 689, price: 824.34, inStock: false },
    { type: 'Acer Z150', id: 297, price: 327.00, inStock: true }
];
// Setup columns for fake data
var columns = [
    {
        header: 'Type',
        dataIndex: 'type'
    },
    {
        header: 'Id',
        dataIndex: 'id'
    },
    {
        header: 'Price',
        dataIndex: 'price'
    },
    {
        header: 'In Stock',
        dataIndex: 'inStock'
    }
];
var FocusTableComponent = (function () {
    function FocusTableComponent() {
        this.table = table;
        this.columns = columns;
        this.focusPosition = { x: 0, y: 0, edit: false };
        this.selectedColumns = this.columns.slice();
    }
    FocusTableComponent.prototype.keyHandler = function ($event) {
        var keyCode = $event.keyCode;
        switch (keyCode) {
            case __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__["a" /* default */].Up: {
                console.log('up');
                this.upPress();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__["a" /* default */].Left: {
                console.log('left');
                this.leftPress();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__["a" /* default */].Down: {
                console.log('down');
                this.downPress();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_1__key_codes_enum__["a" /* default */].Right: {
                console.log('right');
                this.rightPress();
                break;
            }
        }
    };
    FocusTableComponent.prototype.setValue = function (value) {
        var arrayIndex = this.focusPosition.y;
        var prop = this.selectedColumns[this.focusPosition.x].dataIndex;
        this.table[arrayIndex][prop] = value;
    };
    FocusTableComponent.prototype.leftPress = function () {
        var x = this.focusPosition.x;
        this.focusPosition.x = x === 0 ? x : x - 1;
    };
    FocusTableComponent.prototype.rightPress = function () {
        var x = this.focusPosition.x;
        this.focusPosition.x = x + 1 === this.selectedColumns.length ? x : x + 1;
    };
    FocusTableComponent.prototype.upPress = function () {
        var y = this.focusPosition.y;
        this.focusPosition.y = y === 0 ? y : y - 1;
    };
    FocusTableComponent.prototype.downPress = function () {
        var y = this.focusPosition.y;
        this.focusPosition.y = y + 1 === this.table.length ? y : y + 1;
    };
    FocusTableComponent.prototype.isFocus = function (x, y) {
        return x === this.focusPosition.x && y === this.focusPosition.y;
    };
    FocusTableComponent.prototype.setFocus = function (x, y) {
        this.focusPosition.x = x;
        this.focusPosition.y = y;
    };
    // Handle change in object field
    FocusTableComponent.prototype.onChanged = function (value) {
        this.setValue(value);
    };
    // Handle change in column
    FocusTableComponent.prototype.saveColumn = function (column, index) {
        this.selectedColumns[index] = column;
    };
    return FocusTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FocusTableComponent.prototype, "keyHandler", null);
FocusTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-focus-table',
        template: __webpack_require__(146),
        styles: [__webpack_require__(141)],
    }),
    __metadata("design:paramtypes", [])
], FocusTableComponent);

//# sourceMappingURL=focus-table.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_interface__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__column_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderCellComponent = (function () {
    function HeaderCellComponent() {
        this.onChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.isEdit = false;
    }
    HeaderCellComponent.prototype.enableEdit = function () {
        this.newColumn = Object.assign({}, this.column);
        this.isEdit = true;
    };
    HeaderCellComponent.prototype.disableEdit = function () {
        this.isEdit = false;
    };
    HeaderCellComponent.prototype.confimEdit = function () {
        this.onChanged.emit(this.newColumn);
        this.disableEdit();
    };
    HeaderCellComponent.prototype.ngOnInit = function () {
    };
    return HeaderCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__column_interface__["Column"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__column_interface__["Column"]) === "function" && _a || Object)
], HeaderCellComponent.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], HeaderCellComponent.prototype, "columns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], HeaderCellComponent.prototype, "onChanged", void 0);
HeaderCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-header-cell',
        template: __webpack_require__(147),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [])
], HeaderCellComponent);

var _a;
//# sourceMappingURL=header-cell.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[172]);
//# sourceMappingURL=main.bundle.js.map