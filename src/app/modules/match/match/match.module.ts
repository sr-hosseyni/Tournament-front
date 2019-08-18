import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatchComponent} from './match.component';

import {TeamModule} from '../../team/team.module';
import {MatchEventsModule} from '../match-events/match-events.module'
import {MatchEventsEditorModule} from '../match-events-editor/match-events-editor.module';
import {MatchResultEditorModule} from '../match-result-editor/match-result-editor.module';
import {LineupModule} from '../lineup/lineup.module';

@NgModule({
    imports: [
        CommonModule,
        TeamModule,
        MatchEventsEditorModule,
        MatchResultEditorModule,
        MatchEventsModule,
        LineupModule,
        NgbModule
    ],
    declarations: [
        MatchComponent
    ],
    exports: [
        MatchComponent
    ]
})
export class MatchModule {}
