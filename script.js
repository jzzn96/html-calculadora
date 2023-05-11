const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const euro = 5.42
const dolar = 4.96
const bitcoin= 0.0000074

const convertValues = () => {
    const inputReal = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

    if (select.value === "US$ Dolar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputReal / dolar)
    }   

    if (select.value === "€ Euro"){
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputReal / euro)}

    if (select.value === "₿ Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
        }).format(inputReal * bitcoin)}
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (select.value === 'US$ Dolar americano') {
        currencyImage.src = "./dolar.png"
        currencyName.innerHTML = "Dólar Americano"
    }

    if (select.value === '€ Euro') {
        currencyImage.src = "./euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (select.value === '₿ Bitcoin') {
        currencyImage.src = "./btc.png"
        currencyName.innerHTML = "BTC"
    }
    
    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)