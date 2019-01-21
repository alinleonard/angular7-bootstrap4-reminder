export class Reminder {
    _id: string;
    userId: string;
    vehicleId: string;

    type: string;
    name: string;
    repeat: boolean;
    trigger: {
        tachometer?: number;
        date?: Date;
    }
    note: string

    created: Date;
}
