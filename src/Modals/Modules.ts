export interface textTransformer {
    message: string;
    count: number;
}

export class textTransformation implements textTransformer {
    count: number;
    message: string;
    constructor(count, message) {
        this.count = count;
        this.message = message;
    }
}