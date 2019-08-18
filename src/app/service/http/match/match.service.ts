import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {JSON} from 'ta-json';

import {Match} from '../../../entities/match';

@Injectable()
export class MatchService {
    private matchUrl: '/match';

    constructor(private http: Http) {
    }

    getMatches(): Observable<Match[]> {
        return this.http.get('/match')
//            .map(res => console.log(res))
//            .map(res => console.log(res.json()))
//            .map(res => console.log(res.json().data))
//            .map(res => console.log(res['data']))
//            .map(res => res.json().data)
//            .map(res => plainToClass(Match, res as Object[]))
            .map(res => JSON.parse<Match[]>(res.text(), Match))
            .catch(this.handleError);
    }

    handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
