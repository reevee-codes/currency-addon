async function fetchData() {
    const res=await fetch ("http://api.nbp.pl/api/exchangerates/rates/c/sek/");
    const record=await res.json();
    document.getElementById("currency").innerHTML=record.code;
    document.getElementById("price").innerHTML=record.rates[0].bid;
}
fetchData();