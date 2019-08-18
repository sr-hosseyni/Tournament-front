import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';
import {SharedModule} from './modules/shared/shared.module';
import {HomeModule} from './pages/home/home.module';
import {AboutModule} from './pages/about/about.module';
import {LoginModule} from './pages/login/login.module';
import {TestModule} from './pages/test/test.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot(),
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        HomeModule,
        AboutModule,
        LoginModule,
        TestModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
