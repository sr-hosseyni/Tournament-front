import {Component, OnInit, Input} from '@angular/core';

import {Team} from '../../../entities/team';

@Component({
    selector: 'app-lineup',
    templateUrl: './lineup.component.html',
    styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {
    @Input() teams: Team[];
    constructor() {}

    ngOnInit() {
        console.log(this.teams);
    }

}
