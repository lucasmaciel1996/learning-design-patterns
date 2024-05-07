type Product ={
    id:string;
    amount:number;
}

interface Database {
    list():Product[]
}

class MongoDb implements Database{
    list(): Product[] {
        return [{
            id:'12345678',
            amount:240
        }]
    }
} 

class CacheProxy implements Database{
    private listCached:Product[];

    constructor(private readonly db:Database){}

    list(): Product[] {

        if(this.listCached){
            this.logs('Cached')
            return this.listCached
        }
        this.logs('Before')
        const data = this.db.list()
        this.listCached = data
        this.logs('After')

        return data
    }

    private logs(text){
        console.log('Login...',{text})
    }
}

function run (db: Database){
    return db.list()
}

const realDb = new MongoDb()

console.log('REAL_DB',run(realDb))
const cacheProxy = new CacheProxy(realDb)

console.log('PROXY_DB_1',run(cacheProxy))
console.log('PROXY_DB_2',run(cacheProxy))