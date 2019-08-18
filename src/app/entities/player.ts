import {JsonObject, JsonProperty, JsonType} from "ta-json";

import {User} from './user';

@JsonObject()
export class Player {
    @JsonProperty()
    id: number;

    @JsonProperty()
    name: string;

    @JsonProperty()
    @JsonType(User)
    user: User;

    // maxmum 4 capital abbreviation word
    @JsonProperty()
    abrv: string;

    @JsonProperty()
    img: string;
}
