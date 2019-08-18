import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchEventsComponent} from './match-events.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MatchEventsComponent
    ],
    exports: [
        MatchEventsComponent
    ]
})
export class MatchEventsModule {}
