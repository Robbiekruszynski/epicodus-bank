// Back end logic bank
function BankBook() {
  this.transLogs = [];
  this.currentId = 0;
}


BankBook.prototype.addTrans = function(transLog) {
  transLog.id = this.assignId();
  this.transLogs.push(transLog);
}

BankBook.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

// Bank teller back end
BankBook.prototype.findTrans = function(id) {
  for (var i=0; i<this.transLogs.length; i++) {
    if(this.transLogs[i]){
      if(this.transLogs[i].id ==id) {
        return this.transLogs[i];
      }
    }
  };
  return false;
};
  BankBook.prototype.deleteTransLog = function(id) {
    for(var i=0; i<this.transLogs.length; i++) {
      if (this.transLogs[i]) {
        if (this.transLogs[i].id ==id) {
          delete this.transLogs[i];
          return true;
        }
      }
    };
    return false;
  };


  // Back end defining objects
  function BankTrans(name, initial, transaction, balance) {
    this.name = name;
    this.initial = initial;
    this.transaction = transaction;
    this.balance = balance;
  }



  // BankTrans.transactions = {
  //
  // return deposit - withdrawl
  // }

  // BankBook.prototype.transaction =function (transaction){
  //   this.total +=tran;
  // };


  // BankBook.prototype.withdraw = function (newWithdraw) {
  //   this.total -=newWithdraw;
  // };


// client side logic
$(document).ready(function() {
  var clientBankBook = new BankBook();
  // var currentBank = clientBankTrans.balance;
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initial = parseInt($("input#init-deposit").val());
    var initTrans = new BankTrans(name, 0, 0, initial);
    // BankBook.push(initTrans);
    clientBankBook.addTrans(initTrans);
    // var currentBalance = clientBankBook.transLogs[(clientBankBook.currentId - 1)];
    // var currentBank = newBankTrans.balance
    // currentBalanceArray.push(currentBank)
    // console.log(clientBankTrans);
    console.log(initTrans.balance);
    // console.log(BankBook);
    // console.log(initial);
    // console.log(currentBalanceArray);
    $("#bank").text("$"+initTrans.balance);
    console.log(clientBankBook);
    });



  $("form#transactions").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#next-deposit").val());
    var withdrawl = parseInt($("input#withdrawl").val());
    var trans = deposit - withdrawl

    // var initTrans = new BankTrans(name, 0, 0, initial);
    

  });
});
// console.log(BankBook);
