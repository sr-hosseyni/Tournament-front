import {Component, OnInit, Input} from '@angular/core';
import {TimerService} from '../../../service/timer/timer.service';

import {MatchFactService} from '../../../service/http/match-fact/match-fact.service';

import {Match} from '../../../entities/match';
import {Team} from '../../../entities/team';
import {Player} from '../../../entities/player';
import {PlayerScore} from '../../../entities/match-facts/player-score';
import {TimeBoundary} from '../../../entities/match-facts/time-boundary';
import {Enums} from '../../../entities/enums/enums';

@Component({
    selector: 'app-match-events-editor',
    providers: [MatchFactService],
    templateUrl: './match-events-editor.component.html',
    styleUrls: ['./match-events-editor.component.scss']
})
export class MatchEventsEditorComponent implements OnInit {
    /**
     * @notice I think this is useless
     */
    //mode = 'Observable';

    Enums = Enums;
    @Input() timer: TimerService;
    @Input() match: Match;

    constructor(private matchFactService: MatchFactService) {}

    ngOnInit() {}

    goal(team: Team, player: Player) {
        let matchFact = this.match.goal(team, player, this.timer.getElapsedTime());
        this.matchFactService.create(matchFact)
            .subscribe(
                response => matchFact.sent = true,
                error => console.log(error)
            );
    }

    ownGoal(team: Team, player: Player) {
        let matchFact = this.match.ownGoal(team, player, this.timer.getElapsedTime());
        this.matchFactService.create(matchFact)
            .subscribe(
                response => matchFact.sent = true,
                error => console.log(error)
            );
    }

    startTime() {
        this.timer.start();

        let matchFact = this.match.start(this.timer.getElapsedTime());

        this.matchFactService.create(matchFact)
            .subscribe(
                response => matchFact.sent = true,
                error => console.log(error)
            );
    }

    pauseTime() {
        this.timer.pause();

        let fact = this.match.pause(this.timer.getElapsedTime());

        this.matchFactService.create(fact)
            .subscribe(
                response => fact.sent = true,
                error => console.log(error)
            );
    }

    resumeTime() {
        this.timer.resume();

        let fact = this.match.resume(this.timer.getElapsedTime());

        this.matchFactService.create(fact)
            .subscribe(
                response => fact.sent = true,
                error => console.log(error)
            );
    }

    finishTime() {
        this.timer.stop();

        let matchFact = this.match.finish(this.timer.getElapsedTime());

        this.matchFactService.create(matchFact)
            .subscribe(
                response => matchFact.sent = true,
                error => console.log(error)
            );
    }
}
