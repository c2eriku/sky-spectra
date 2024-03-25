export interface UserChoice {
    optionKey: string;
    category: string;
    value: number;
}

export class UserChoice implements UserChoice {
    constructor(optionKey: string, category: string, value: number) {
        this.optionKey = optionKey;
        this.category = category;
        this.value = value;
    }
}