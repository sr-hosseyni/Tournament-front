import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {FormsModule} from '@angular/forms';

import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../modules/shared/shared.module';
import {TestRoutingModule} from './test-routing.module';
import {TestComponent} from './test.component';

import {MatchesListModule} from '../../modules/match/matches-list/matches-list.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        CoreModule,
        SharedModule,
        TestRoutingModule,
        FormsModule,
        MatchesListModule
    ],
    declarations: [
        TestComponent
    ],
    providers: [
    ]
})
export class TestModule {}
