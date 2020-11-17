class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
}

makeDeposit(amount) {
    this.accountBalance += amount;
}

makeWithdrawal(amount) {
    this.accountBalance -= amount;
}

displayBalance() {
    console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
}
}

const jm = new User("Joshua Marson", "jjm@gmail.com");
const ad = new User("Adam West", "adam.west@hotmail.com");

jm.makeDeposit(200).makeDeposit(4000).makeDeposit(34).makeDeposit(66).makeDeposit(9000).makeWithdrawal(10000).displayBalance();
ad.makeDeposit(4000).makeWithdrawal(3000).makeDeposit(6000).makeWithdrawal(7000).displayBalance();