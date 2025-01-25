async function fetchData() {
    try {
        const response = await fetch("http://api.nbp.pl/api/exchangerates/rates/c/sek/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const record = await response.json();
        
        document.getElementById("currency").textContent = record.code;
        document.getElementById("price").textContent = record.rates[0].bid;
    } catch (error) {
        console.error("Failed to fetch currency data:", error);
 
        document.getElementById("currency").textContent = "Error";
        document.getElementById("price").textContent = "Failed to load";
    }
}

document.addEventListener('DOMContentLoaded', fetchData);