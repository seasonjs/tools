export class AsyncQueue {
    private funcQueue = []
    private isExec = false
    // @ts-ignore
    add({func}){
        if(!this.isExec){
            this.exec()
        }
        // 正在执行时，放进队列里
        // @ts-ignore
        this.funcQueue.push(func)
    }
    private async exec(){
        if(!this.funcQueue.length){
            return
        }

        // 执行函数
        const head = this.funcQueue.shift()
        this.isExec = true
        // @ts-ignore
        await head()
        this.isExec = false

        this.exec()
    }
}
