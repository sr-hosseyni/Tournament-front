import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchEventsEditorComponent} from './match-events-editor.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MatchEventsEditorComponent
    ],
    exports: [
        MatchEventsEditorComponent
    ]
})
export class MatchEventsEditorModule {}
