import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    reminders: any[];

    constructor() { }

    ngOnInit() {
        this.reminders = [
            { title: 'Battery', date: '31/11/2018', type: 'service' },
            { title: 'Registration', date: '14/10/2018', type: 'expense' },
            { title: 'File', date: '31/06/2018', type: 'expense' },
            { title: 'Belts', odometer: '1400000', type: 'service' },
            { title: 'Parking', odometer: '3000000', type: 'expense' }
        ]
    }

    edit(index) {
        // on edit just populate the right section
        // of this page with the approapiate content
        // console.log(index);
    }

}
