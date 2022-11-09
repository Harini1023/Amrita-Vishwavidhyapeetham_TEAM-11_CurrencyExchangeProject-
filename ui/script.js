const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/82e97f44652d834d0fb70b75/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerText = "Something went wrong";
    });
}

// function graph(){
//   fromdate = document.querySelector('#from').value
//   let From_month = fromdate.getMonth()
//   let From_year = fromdate.getFullYear()
//   // console.log(month);

//   Todate = document.querySelector('#from').value
//   let To_month = fromdate.getMonth()
//   let To_year = fromdate.getFullYear()
//   //console.log(month);
//  }

function stats() {
    var selectBox = document.getElementById("myList");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue=='Monthly') {
        $('#send1').html("<select class='dropdown'><option value='-id from result database-'>-name from result database query-</option></select>");
    } 
    if (selectedValue=='Yearly') {
        $('#send2').html("<select class='dropdown'><option value='-id from result database-'>-name from result database query-</option></select>");
    } 
    if (selectedValue=='Weekly') {
        $('#send3').html("<select class='dropdown'><option value='-id from result database-'>-name from result database query-</option></select>");
    } 
 }