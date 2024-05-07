interface IDB{
    save(data:string[]):void
}

interface Game {
    boardData:string[]
    save():void
}

class Database1 implements IDB {
    save(data:string[]): void {
        console.log(`DB:Database1`,{data})
    }
    
}
class Database2 implements IDB {
    save(data:string[]): void {
        console.log(`DB:Database2`,{data})
    }
    
}

class PlayGame implements Game{
    constructor(public readonly boardData:string[],private readonly db:IDB){}

    save(): void {
        this.db.save(this.boardData)
    }
    
}

console.log(new PlayGame(['A1','A2','B1','C1'],new Database1()).save())
console.log(new PlayGame(['A1','A2',],new Database2()).save())