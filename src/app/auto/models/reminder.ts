export class Reminder {
    _id: string;
    userId: string;
    vehicleId: string;

    type: string;
    name: string;
    repeat: string;
    trigger: {
        tachometer: number;
        date: Date;
    }
    note: string

    created: Date;
}
