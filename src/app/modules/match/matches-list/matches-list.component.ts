import {Component, OnInit} from '@angular/core';

import {MatchService} from '../../../service/http/match/match.service';

import {Match} from '../../../entities/match';

@Component({
    selector: 'app-matches-list',
    providers: [MatchService],
    templateUrl: './matches-list.component.html',
    styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
    mode = 'Observable';
    matches: Match[];
    errorMessage: string;

    constructor(private matchService: MatchService) {}

    ngOnInit() {
        this.getMatchesList();
    }

    getMatchesList() {
        this.matchService.getMatches().
            subscribe(
            matches => this.matches = matches,
            error => this.errorMessage = <any> error
            );
    }
}
