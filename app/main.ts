import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app/app.component';
import { PeopleService } from './services/people/person.service';
import { HTTP_PROVIDERS } from 'angular2/http';
bootstrap(AppComponent, [HTTP_PROVIDERS, PeopleService]);
