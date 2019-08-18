import {JsonObject, JsonProperty, JsonType} from "ta-json";

import {Player} from './player';

@JsonObject()
export class Team {
    static resources: Team[] = [];

    @JsonProperty()
    id: number;

    @JsonProperty()
    name: string;

    @JsonProperty()
    logo: string;

    // maxmum 4 capital abbreviation word
    @JsonProperty()
    abrv: string;

    @JsonProperty()
    @JsonType(Player)
    players: Player[];

    public getPlayer(playerId: number): Player
    {
        for (let player of this.players) {
            if (player.id == playerId) {
                return player;
            }
        }

        return null;

    }
}
