import {JsonObject, JsonProperty, JsonDiscriminatorValue} from "ta-json";

import {MatchEventType} from '../enums/match-event-type.enum';
import {Match} from '../match';
import {Enums} from '../enums/enums';
import {TimeBoundaryType} from '../enums/time-boundary-type.enum';
import {MatchFact} from '../match-fact';

@JsonObject()
@JsonDiscriminatorValue(MatchEventType.TIME_BOUNDARY)
export class TimeBoundary extends MatchFact
{
    @JsonProperty('type')
    tb_type: TimeBoundaryType;

    constructor(match: Match, time: number, tb_type: TimeBoundaryType) {
        super(Enums.Match.EventType.TIME_BOUNDARY, match, time);
        this.tb_type = tb_type;
    }

    isPlayerOriented(): boolean {
        return false;
    }
}
