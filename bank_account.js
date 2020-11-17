class BankAccount {
    constructor(intRate= .04, balance=0) { // don't forget to add some default values for these parameters!
        this.intRate = intRate;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance < 0){
            console.log("Insufficent Funds: Charging a $5 Fee!");
            this.balance -= 5;
        }
        return this;

    }
    displayAccountInfo() {
        console.log(
            'Current Balance: $$(this.balance), Interest Rate: $(this.intRate)'
        );
        return this;
    }
    yieldInterest() {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

const account = new BankAccount();
const account_1 = new BankAccount(.02, 4000)