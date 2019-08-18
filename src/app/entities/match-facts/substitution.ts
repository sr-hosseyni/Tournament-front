import {Enums} from '../enums/enums';
import {MatchFact} from '../match-fact';

export class Substitution extends MatchFact {
    protected static getEventType() : number {
        return Enums.Match.EventType.SUBSTITUTION;
    }

    public isPlayerOriented(): boolean {
        return true;
    }
}
