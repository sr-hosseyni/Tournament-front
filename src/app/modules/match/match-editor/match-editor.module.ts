import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TeamModule} from '../../team/team.module';
import {MatchModule} from '../match/match.module';
import {MatchEventsEditorModule} from '../match-events-editor/match-events-editor.module';
import {MatchResultEditorModule} from '../match-result-editor/match-result-editor.module';
import {MatchEditorComponent} from './match-editor.component';
import {MatchEventsModule} from '../match-events/match-events.module'

@NgModule({
    imports: [
        CommonModule,
        TeamModule,
        MatchEventsEditorModule,
        MatchResultEditorModule,
        MatchModule,
        MatchEventsModule,
        NgbModule
    ],
    declarations: [
        MatchEditorComponent
    ],
    exports: [
        MatchEditorComponent
    ]
})
export class MatchEditorModule {}
