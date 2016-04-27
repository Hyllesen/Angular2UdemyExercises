System.register(['angular2/core', './courses.component', './authors.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.isActive = false;
                    this.imageUrl = "http://api.ning.com/files/1R1gqINM7bz6Pmfx*ajN44R5D3kPtEchAyn1330EO09G-Q8WNLhBR6f6LPoJokwbLPaWm0zGisn8I2eBaQ1SiaeINq581HL9/HK5_3001.gif";
                }
                AppComponent.prototype.onclick = function () {
                    this.isActive = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular</h1>\n        <h1 [textContent]=\"title\"></h1>\n        <courses></courses>\n        <authors></authors>\n        <h3> {{title}}</h3>\n        <img src=\"{{ imageUrl }}\"/>\n        <img [src]=\"imageUrl\" />\n        <img bind-src=\"imageUrl\"/>\n        <button \n            (click)=\"onClick()\"\n            class=\"btn btn-primary\"\n            [style.backgroundColor]=\"isActive ? 'blue' : 'red'\">Submit</button>    \n         <button (click)=\"onClick()\">Submit</button>    \n         <button on-click=\"onClick()\">Submit</button>    \n\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map