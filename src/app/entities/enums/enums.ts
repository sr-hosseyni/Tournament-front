import {MatchStatus} from './match-status.enum';
import {MatchEventType} from './match-event-type.enum';
import {MatchVenue} from './match-venue.enum';
import {TimeBoundaryType} from './time-boundary-type.enum';
import {TimeBoundary} from './match-event/TimeBoundary.enum';
import {PlayerScore} from './match-event/player-score.enum';

export var Enums = {
    Match: {
        Status: MatchStatus,
        EventType: MatchEventType,
        EventTypes: {
            TimeBoundary: TimeBoundary,
            PlayerScore: PlayerScore
        },
        Venue: MatchVenue,
        TimeBoundaryType: TimeBoundaryType
    }
};
