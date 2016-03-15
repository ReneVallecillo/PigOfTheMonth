import {Component} from 'angular2/core';
import {WeightsComponent} from '../weights/weights.components';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <weights></weights>
    `,
    directives: [WeightsComponent]
})
export class AppComponent { }
