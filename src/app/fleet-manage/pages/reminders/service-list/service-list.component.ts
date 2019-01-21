import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-service-list',
    templateUrl: './service-list.component.html',
    styleUrls: ['./service-list.component.scss']
})

export class ServiceListComponent implements OnInit {

    services: any[];

    constructor() { }

    ngOnInit() {
        this.services = [
            { title: 'Battery', date: '31/11/2018', type: 'service' },
            { title: 'Registration', date: '14/10/2018', type: 'expense' },
            { title: 'File', date: '31/06/2018', type: 'expense' },
            { title: 'Belts', odometer: '1400000 km', type: 'service' },
            { title: 'Parking', date: '3000000 km', type: 'expense' }
        ]
    }

}
