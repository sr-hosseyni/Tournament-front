import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchResultEditorComponent} from './match-result-editor.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MatchResultEditorComponent
    ],
    exports: [
        MatchResultEditorComponent
    ]
})
export class MatchResultEditorModule {}
