import {JsonObject, JsonProperty, JsonDiscriminatorProperty, JsonWriteonly, OnDeserialized} from "ta-json";

import {MatchEventType} from './enums/match-event-type.enum';
import {Player} from './player';
import {Team} from './team';
import {Match} from './match';

@JsonObject()
@JsonDiscriminatorProperty("etype")
export abstract class MatchFact {
    @JsonProperty()
    @JsonWriteonly()
    id: number;

    @JsonProperty()
    etype: MatchEventType;

    @JsonProperty()
    match_id: number;

    sent: boolean;

    @JsonProperty()
    set_number: number;

    @JsonProperty("time")
    time_offset: number;

    constructor(etype: number, match: Match, time: number) {
        this.etype = etype;
        this.match_id = match.id;

        /**
         * @todo setNumber must been get from match
         */
        this.set_number = 1;
        this.time_offset = time;
        this.sent = false;
    }

    @OnDeserialized()
    public onDeserialized() {
        this.sent = true;
    }

    getFormattedTime() {
        return ((this.time_offset - this.time_offset % 60)/60) + ':' + (this.time_offset % 60);
    }

    abstract isPlayerOriented(): boolean;
}
