interface OrderService{
    execute:()=>Promise<string>
}

class ShopOrderService implements OrderService{
    execute(){
        const n = Math.round(Math.random() * 100)
        if( n %2 === 0 ){
            return Promise.resolve('CREATED') 
        }
        throw new Error('FAIL')
    }
}

class ShopOrderWithRetries implements  OrderService{
    constructor(private readonly service:OrderService,private readonly config:{}){}

    async execute(){
        try {
            return await this.service.execute()
        } catch (error) {
            console.log('Retries---->',{config:this.config})
            return await this.service.execute()
        }
    }
}

class ShopOrderWithLogs implements  OrderService{
    constructor(private readonly service:OrderService){}

    async execute(){
        try {
            return await this.service.execute()
        } catch (error) {
            console.error('Logs---->',error)
            return 'FAIL'
        }
    }
}

async function run(){
    const service1 = new ShopOrderWithLogs(new ShopOrderService())
    console.log(await service1.execute())
    
    const service2= new ShopOrderWithRetries(new ShopOrderService(),{attempt:5})
    for(const i of [1,2,3,4,5,6]) {
        const result = await service2.execute().then(d => d).catch(()=>null)
        console.log(`ATT: ${i}`,result)   
    }
}

run()
