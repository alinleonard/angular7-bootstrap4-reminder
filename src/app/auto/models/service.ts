export class Service {
    _id: string;
    userId: string;
    vehicleId: String;

    date: Date;
    tachometer: Number;
    service: [{
        name: string;
        value: Number;
        currency: string;
    }];
    location: String;
    note: String;

    created: Date
}
