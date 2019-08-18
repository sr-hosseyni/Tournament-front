import {JSON, JsonObject, JsonProperty, JsonType, JsonElementType} from "ta-json";

@JsonObject()
export class MatchResult {
    @JsonProperty("set_number")
    setNumber: number;

    @JsonProperty("goals_for")
    goalsFor: {};

    constructor(setNumber: number, firstTeamId: number, goalsForFirstTeam: number, secondTeamId: number, goalsForSecondTeam: number) {
        this.setNumber = setNumber;
        this.goalsFor = {};
        this.goalsFor[firstTeamId] = goalsForFirstTeam;
        this.goalsFor[secondTeamId] = goalsForSecondTeam;
    }

//    @JsonProperty("player_id")
//    @JsonReadonly()
//    public set playerId($goalsScored) {
//        this.goalsFor[];
//    }
}
