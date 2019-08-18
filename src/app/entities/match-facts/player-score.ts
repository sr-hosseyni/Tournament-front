import {JsonObject, JsonProperty, JsonDiscriminatorValue} from "ta-json";

import {MatchEventType} from '../enums/match-event-type.enum';
import {Player} from '../player';
import {Team} from '../team';
import {Match} from '../match';
import {Enums} from '../enums/enums';
import {MatchFact} from '../match-fact';

@JsonObject()
@JsonDiscriminatorValue(MatchEventType.PLAYER_SCORE)
export class PlayerScore extends MatchFact {
    @JsonProperty("player_id")
    playerId: number;

    @JsonProperty("team_id")
    teamId: number;

    @JsonProperty("is_host")
    isHost: boolean;

    @JsonProperty("is_own_goal")
    isOwnGoal: boolean = false;

    constructor(time: number, team: Team, player: Player, match: Match, ownGoal: boolean = false) {
        super(PlayerScore.getEventType(), match, time);
        this.playerId = player.id;
        this.teamId = team.id;
        this.isOwnGoal = ownGoal;
        this.isHost = match.teams[0].id === this.teamId;

    }

    protected static getEventType() : number {
        return Enums.Match.EventType.PLAYER_SCORE;
    }

    getFormattedTime() {
        return ((this.time_offset - this.time_offset % 60)/60) + ':' + (this.time_offset % 60);
    }

    isPlayerOriented(): boolean {
        return true;
    }

    //    @JsonProperty("player_id")
    //    @JsonReadonly()
    //    public get playerId(): number {
    //        return this.player.id;
    //    }
//
//    @JsonProperty("team_id")
//    @JsonReadonly()
//    public get teamId(): number {
//        return this.team.id;
//    }
}
