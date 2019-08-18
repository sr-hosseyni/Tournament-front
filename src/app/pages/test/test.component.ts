import 'rxjs/add/operator/finally';

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    quote: string;
    isLoading: boolean;
    name: string;

    constructor() {}

    ngOnInit() {
        this.isLoading = true;
        this.name = 'russell';
    }

    kiir() {
        alert(1);
    }
}
