class Queue {
    constructor(...args) {
        this._head = 0;
        this._tail = 0;
        for (const arg of args) {
            this.enQueue(arg);
        }
    }
    get size() {
        return this._tail - this._head;
    }
    enQueue(value) {
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }

    deQueue() {
        if (this.size) {
            const head = this[this._head];
            delete this[this._head];
            this._head++;
            return head;
        }
    }
}
