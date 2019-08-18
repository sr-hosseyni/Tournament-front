import {Component, OnInit, Input} from '@angular/core';

import {Match} from '../../../entities/match';
import {Enums} from '../../../entities/enums/enums';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
    Enums = Enums;
    isCollapsed : boolean = true;
    @Input() match: Match;

    constructor() {
    }

    ngOnInit() {
    }


}
