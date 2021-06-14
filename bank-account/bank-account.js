export class BankAccount {
  constructor() {
  }

  open() {
    if(this.closed == false) {
      throw new ValueError
    }
    this.closed = false
    this.balance = 0
  }

  get closed() {
    return this._closed
  }

  set closed(value) {
    this._closed = value
  }

  close() {
    if(this.closed == false) {
      this.closed = true
    } else {
      throw new ValueError
    }
  }

  deposit(sum) {
    if(sum < 0) throw new ValueError
    this.balance += sum
  }

  withdraw(sum) {
    if(sum > this.balance || sum < 0) {
      throw new ValueError
    }
    this.balance -= sum
  }

  set balance(number) {
    this._balance = number
  }

  get balance() {
    if(this.closed == false) {
     return this._balance
    } else {
      throw new ValueError
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
