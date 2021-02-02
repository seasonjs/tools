export class AsyncQueue {
    private funcQueue = []
    private isExec = false
    add({func}){
        if(!this.isExec){
            this.exec()
        }
        // 正在执行时，放进队列里
        this.funcQueue.push(func)
    }
    private async exec(){
        if(!this.funcQueue.length){
            return
        }

        // 执行函数
        const head = this.funcQueue.shift()
        this.isExec = true
        await head()
        this.isExec = false

        this.exec()
    }
}