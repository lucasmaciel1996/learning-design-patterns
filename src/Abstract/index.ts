abstract class BaseService {
    abstract run():string
}

class OrderService extends BaseService { 
    run(): string {
        return 'Order: running...'
    }
}

class SaleService extends BaseService { 
    run(): string {
       return 'Sale: running...'
    }
}

const service1 = new OrderService()
const service2 = new SaleService()

console.log({
    order: service1.run(),
    sale: service2.run(),
})