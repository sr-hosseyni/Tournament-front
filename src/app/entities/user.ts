import {JsonObject, JsonProperty} from "ta-json";

@JsonObject()
export class User {
    @JsonProperty()
    id: number;

    @JsonProperty()
    fname: string;

    @JsonProperty()
    lname: string;

    @JsonProperty()
    nname: string;
}
