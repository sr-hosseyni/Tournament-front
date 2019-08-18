import {JSON, JsonObject, JsonProperty, JsonType, JsonElementType} from "ta-json";

import {Team} from './team';
import {Player} from './player';
import {MatchFact} from './match-fact';
import {MatchResult} from './match-result';
import {PlayerScore} from './match-facts/player-score';
import {Enums} from './enums/enums';
import {TimeBoundary} from './match-facts/time-boundary';

@JsonObject()
export class Match {
    @JsonProperty()
    @JsonElementType(Team)
    teams: Team[];

    @JsonProperty()
    @JsonType(MatchFact)
    events: MatchFact[];

    @JsonProperty()
    @JsonType(MatchResult)
    results: MatchResult[];

    @JsonProperty()
    id: number;

    @JsonProperty()
    status: number;

    @JsonProperty()
    @JsonType(Date)
    schedule: Date;

    constructor() {}

    initial(teams: Team[]) {
        this.events = [];
        this.teams = teams;
        this.results = [new MatchResult(0, this.teams[0].id, 0, this.teams[1].id, 0)];
    }

    getSchedule() {
        return this.schedule;
    }

    goal(team: Team, player: Player, time: number): MatchFact {
        return this.addEvent(new PlayerScore(time, team, player, this));
    }

    ownGoal(team: Team, player: Player, time: number): MatchFact {
        for (let iteam of this.teams) {
            if (iteam.id !== team.id) {
                team = iteam;
                break;
            }
        }

        return this.addEvent(new PlayerScore(time, team, player, this, true));;
    }

    start(timeOffset: number): MatchFact {
        this.results[0] = new MatchResult(0, this.teams[0].id, 0, this.teams[1].id, 0);
        return this.addEvent(new TimeBoundary(this, timeOffset, Enums.Match.TimeBoundaryType.START));
    }

    pause(timeOffset: number): MatchFact {
        return this.addEvent(new TimeBoundary(this, timeOffset, Enums.Match.TimeBoundaryType.PAUSE));
    }

    resume(timeOffset: number): MatchFact {
        return this.addEvent(new TimeBoundary(this, timeOffset, Enums.Match.TimeBoundaryType.RESUME));
    }

    finish(timeOffset: number): MatchFact {
        return this.addEvent(new TimeBoundary(this, timeOffset, Enums.Match.TimeBoundaryType.FINISH));
    }

    addEvent(fact: MatchFact): MatchFact {
        this.events.push(fact);
        switch (fact.etype) {
            case Enums.Match.EventType.PLAYER_SCORE:
                this.results[0].goalsFor[(fact as PlayerScore).teamId]++;
                break;

            case Enums.Match.EventType.TIME_BOUNDARY:
                switch ((fact as TimeBoundary).tb_type) {
                    case Enums.Match.TimeBoundaryType.START:
                        this.status = Enums.Match.Status.ONGOING;
                        break;

                    case Enums.Match.TimeBoundaryType.FINISH:
                        this.status = Enums.Match.Status.FINISHED;
                        break;

                    case Enums.Match.TimeBoundaryType.PAUSE:
                        this.status = Enums.Match.Status.TIMEOUT;
                        break;

                    case Enums.Match.TimeBoundaryType.START:
                        this.status = Enums.Match.Status.ONGOING;
                        break;

                }
                break;
        }

        return fact;
    }
}
