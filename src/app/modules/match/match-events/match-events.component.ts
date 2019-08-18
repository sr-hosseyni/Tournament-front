import {Component, OnInit, Input, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';

import {MatchFact} from '../../../entities/match-fact';
import {Team} from '../../../entities/team';
import {MatchVenue} from '../../../entities/enums/match-venue.enum';
import {Enums} from '../../../entities/enums/enums';
import {PlayerScore} from '../../../entities/match-facts/player-score';

@Component({
    selector: 'app-match-events',
    templateUrl: './match-events.component.html',
    styleUrls: ['./match-events.component.scss']
})
export class MatchEventsComponent implements OnInit {
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    @Input() events: MatchFact[];
    @Input() teams: Team[];

    Enums = Enums;

    constructor() {}

    ngOnInit() {
        this.scrollToBottom();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }

    getPlayerFullName(event: PlayerScore, defaultValue: any = null): string
    {
        if (event.playerId) {
            let user = this.teams[Number(!(+event.isHost ^ +event.isOwnGoal))].getPlayer(event.playerId).user;
            return user.fname + " " + user.lname;
        }

        return defaultValue;
    }
}
