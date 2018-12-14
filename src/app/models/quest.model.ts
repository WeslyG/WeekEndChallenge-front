export class QuestModel {
    constructor(id?, name?, description?: string, price?: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    id: string;
    name: string;
    description: string;
    price: number;
}
