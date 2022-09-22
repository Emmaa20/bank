function calculator() {

    var amount = document.getElementById('amount').value;

    var monthly = document.getElementById('monthly').value;

    var percent = document.getElementById('percent').value;

    var total = (parseFloat(amount * percent / 100) + parseFloat(amount)) / monthly;

    document.getElementById('total').innerHTML=`Ayliq odenisiniz :  <span>${total}</span>`;
    
}