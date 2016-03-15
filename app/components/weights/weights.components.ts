import { Component} from 'angular2/core';

@Component({
    selector: 'weights',
    templateUrl: 'app/components/weights/weights.component.html',
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class WeightsComponent {
  months: string[] = moment.monthsShort();
}
