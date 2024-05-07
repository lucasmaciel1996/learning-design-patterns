interface IDatabase {
    getUser:(id:string)=>string
}

class MYSQL implements IDatabase{
    getUser(id: string){
        return `MYSQL: ID ${id}`
    }   
}

class Mongo implements IDatabase{
    getUser(id: string){
        return `MONGO: ID ${id}`
    }   
}

class PostgreeSQL implements IDatabase{
    getUser(id: string){
        return `POSTGREE: ID ${id}`
    }   
}

class UserAbstraction {
    constructor(private readonly db:IDatabase){}

    getUser(id: string){
        return this.db.getUser(id)
    }   
}

class BasicUser extends UserAbstraction{}
class PremiumUser extends UserAbstraction{}

const mongo = new Mongo()
const basicUser = new BasicUser(mongo)
console.log(basicUser.getUser('12223434'))


const mysql = new MYSQL()
const postgreeSQL = new PostgreeSQL()
const premiumUser = new PremiumUser(mysql)
const premiumUser2 = new PremiumUser(postgreeSQL)

console.log(premiumUser.getUser('12223434'))
console.log(premiumUser2.getUser('1222'))