import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatchesListComponent} from './matches-list.component';

import {MatchEditorModule} from '../match-editor/match-editor.module';
import {MatchModule} from '../match/match.module';

@NgModule({
    imports: [
        CommonModule,
        MatchEditorModule,
        MatchModule
    ],
    declarations: [
        MatchesListComponent
    ],
    exports: [
        MatchesListComponent
    ]
})
export class MatchesListModule {}
