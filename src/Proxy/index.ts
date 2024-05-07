interface Subject{
    request():void
}

class RealSubject implements Subject{
    request(): void {
        console.log('REAL_SUBJECT')
    }
}

class RProxy implements Subject{
    constructor(private readonly service:RealSubject){}

    request(): void {
        if(this.checkAccess()){
            this.logAccess('Before')
            this.service.request()
            this.logAccess('After')
        }
    }


    private checkAccess():boolean{
        return true
    }

    private logAccess(text:string):void{
        console.log('Log...', {text})
    }
}

function run(sub:Subject){
    sub.request()
}

const real = new RealSubject()
run(real)

const proxy = new RProxy(real)

run(proxy)