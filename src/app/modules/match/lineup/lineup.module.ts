import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LineupComponent} from './lineup.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LineupComponent
    ],
    exports: [
        LineupComponent
    ]
})
export class LineupModule {}
