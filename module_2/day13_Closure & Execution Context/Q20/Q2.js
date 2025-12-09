function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];
    return {
        deposit: function(amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Insufficient balance");
            }
        },
        checkBalance: function() {
            console.log(`Balance: ${balance}`);
        },
        getTransactionHistory: function() {
            console.log(transactionHistory);
        }
    };
}

// Example usage:
const account = createBankAccount();
account.deposit(500);      // Output: Deposited: 500
account.withdraw(200);     // Output: Withdrawn: 200
account.withdraw(400);     // Output: Insufficient balance
console.log(account.balance); // Output: undefined
