// handle deposite button

document.getElementById('deposite-submit').addEventListener('click', function() {

    const newDepositeAmount = document.getElementById('deposite-amount');

    const newTotalDepositeAmount = document.getElementById('deposite-total');


    const previousDepositeAmount = newTotalDepositeAmount.innerText;
    const totalDepositeAmount = parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount.value);

    newTotalDepositeAmount.innerText = totalDepositeAmount;

    // update account balance
    const balanceAmount = document.getElementById('balance-total');
    const newTotalBalance = balanceAmount.innerText
    const previousBalance = parseFloat(newTotalBalance);
    const totalBalance = previousBalance + parseFloat(newDepositeAmount.value)

    balanceAmount.innerText = totalBalance;


    // clear the deposite input field

    newDepositeAmount.value = '';
});

// handle withdraw button
document.getElementById('withdraw-submit').addEventListener('click', function() {

    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdraw = document.getElementById('withdraw-total')

    const previousWithdraw = parseFloat(newWithdraw.innerText);
    const totalWithdraw = previousWithdraw + parseFloat(withdrawAmount.value);

    newWithdraw.innerText = totalWithdraw
        // update account balance
    const balanceAmount = document.getElementById('balance-total');
    const newTotalBalance = balanceAmount.innerText
    const previousBalance = parseFloat(newTotalBalance);
    const totalBalance = previousBalance - parseFloat(withdrawAmount.value)

    balanceAmount.innerText = totalBalance;

    // clear withdraw input
    withdrawAmount.value = '';
});