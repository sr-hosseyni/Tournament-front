import {Component, OnInit, Input} from '@angular/core';

import {Team} from '../../entities/team'
import {Player} from '../../entities/player'

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    @Input() team: Team;
    @Input() venue: string;

    constructor() {
    }

    ngOnInit() {
    }

}
