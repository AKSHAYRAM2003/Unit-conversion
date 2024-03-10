/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input = document.getElementById("my-number")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("len-res")
let volumeEl = document.getElementById("vol-res")
let massEl = document.getElementById("mass-res")

const meterToFeet = 3.281
const literToGallon = 0.264
const massToPound = 2.204

convertBtn.addEventListener("click",function(){
    let baseValue = input.value

    lengthEl.textContent = `${baseValue} Meters = ${(baseValue * meterToFeet).toFixed(3)} Feet | ${baseValue} Feet = ${(baseValue / meterToFeet).toFixed(3)} Meters`
        volumeEl.textContent = `${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} Liters`
        
    massEl.textContent = `${baseValue} Kilo = ${(baseValue * massToPound).toFixed(3)} Pounds | ${baseValue} Pounds = ${(baseValue / massToPound).toFixed(3)} mass`

  
})

