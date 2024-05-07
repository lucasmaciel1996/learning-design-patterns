interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation{
    operationImplementation(): string {
        return 'ConcreteImplementationA';
    }
}

class ConcreteImplementationB implements Implementation{
    operationImplementation(): string {
        return 'ConcreteImplementationB';
    }
}

class Abstraction{
    constructor(protected readonly impl:Implementation){}

    public operation(){
        return this.impl.operationImplementation()
    }

}

class ExtendedAbstraction  extends Abstraction{
    public operation(): string {
        return this.impl.operationImplementation();
        
    }
}

function clientCode(abs:Abstraction){
    console.log(abs.operation())
}

let impl = new ConcreteImplementationA()
let abs = new ExtendedAbstraction(impl)

clientCode(abs)

impl = new ConcreteImplementationB()
abs = new ExtendedAbstraction(impl)
clientCode(abs)