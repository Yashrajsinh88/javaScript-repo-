function BankAccount(customerName , balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.AccountNumber = Date.now();
}

const Account = new BankAccount("yashraj" , 5000);

console.log(Account);

this.deposit = (amount) => {
    this.deposit += amount;
}; 

this.withdraw = (amount) => {
    this.deposit -= amount;
}; 

BankAccount();

const depositAccount = new 
