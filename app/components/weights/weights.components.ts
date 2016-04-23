import { Component, OnInit} from 'angular2/core';
import {Person} from '../../models/models';
import {PeopleService} from '../../services/people/person.service';

@Component({
    selector: 'weights',
    templateUrl: 'app/components/weights/weights.component.html',
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class WeightsComponent implements OnInit{
  months: string[] = moment.monthsShort();
  date: Date = new Date();
  people: Person[];

  constructor(private peopleService: PeopleService){

  }

  ngOnInit(){
    this.get(this.date);
  }

  get(date: Date){
    this.peopleService.get(date)
    .subscribe((people) => {
      this.people = people;
    });
  }

}
