export class QuestListModel {
    constructor(id?, name?, position?, score?, questCount?: number) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.score = score;
        this.questCount = questCount;
    }

    id: string;
    name: string;
    position: number;
    score: number;
    questCount: number;
}
