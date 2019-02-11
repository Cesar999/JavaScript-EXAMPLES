function Bank(){
    var accounts = [];
    this.saveClient = function (id, money){
        accounts.push({id, money});
    }
    this.getClient = function(id){
        for(acc of accounts){
            if(acc.id === id){
                return acc;
            }
        }
        return null;
    }
    this.getAccounts = function(){
        return accounts;
    }
}

var bank = new Bank();
bank.saveClient(1,5000);
bank.saveClient(2,6000);
bank.saveClient(3,9000);

console.log(bank.accounts);
console.log(bank.getClient(3));
console.log(bank.getAccounts());