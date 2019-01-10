export class Upload {
    _id: number;
    file: File;
    name: string;
    url: string;
    progress: number;
    created: Date;

    constructor(file: File) {
        this.file = file;
    }
}
