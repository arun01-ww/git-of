function calculatorBMI(){
    let weightInput=prompt("enter your weight in kg:");
    let heightInput=prompt("enter your height in cm:");

    let weight=parseFloat(weightInput);
    let heightcm=parseFloat(heightInput);

    let height=heightcm/100;
    let bmi=weight/(height*height);
    document.getElementById("result").innerHTML=`your BMI is: ${bmi.toFixed(2)}`;}