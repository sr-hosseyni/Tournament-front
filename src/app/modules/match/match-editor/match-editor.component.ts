import {Component, OnInit, Input} from '@angular/core';
import {JSON, JsonObject, JsonProperty} from "ta-json";

import {TimerService} from '../../../service/timer/timer.service';

import {Match} from '../../../entities/match';
import {Team} from '../../../entities/team';
import {Player} from '../../../entities/player';
import {MatchResult} from '../../../entities/match-result';
import {Enums} from '../../../entities/enums/enums'

@Component({
    selector: 'app-match-editor',
    templateUrl: './match-editor.component.html',
    styleUrls: ['./match-editor.component.scss']
})
export class MatchEditorComponent implements OnInit {
    public Enums = Enums;
    timer: TimerService;
    @Input() match: Match;

    constructor() {
        this.timer = new TimerService(300); 
    }

    ngOnInit() {
        console.log(this.match);
    }
}

