function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}

console.log(willBuyDrink(true, 10.51))