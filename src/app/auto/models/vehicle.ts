export class Vehicle {
    _id: string;
    userId: string;

    type: string;
    name: string;
    manufacturer: string;
    model: string;
    plate: string;
    chasis: string;
    vin: string;
    note: string;

    created: Date;

    status?: boolean;
}
