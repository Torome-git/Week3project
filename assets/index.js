function showTotal() {
    .preventDefault();
    let data = [];

    data[0] = data["shedA"] = parseInt(document.getElementById("shedA").value);
    data[1] = data["shedB"] = parseInt(document.getElementById("shedB").value);
    data[2] = data["shedC"] = parseInt(document.getElementById("shedC").value);
    data[3] = data["shedD"] = parseInt(document.getElementById("shedD").value);

    let sumData = data.shedA + data.shedB + data.shedC + data.shedD;

    document.getElementById("total").innerHTML += "<Br>";
  
    document.getElementById("total").innerHTML +=
      "<p>Your production in shed A is " + data.shedA + " litres per day</p>";
    document.getElementById("total").innerHTML +=
      "<p>Your production in shed B is " + data.shedB + " litres per day</p>";
    document.getElementById("total").innerHTML +=
      "<p>Your production in shed C is " + data.shedC + " litres per day</p>";
    document.getElementById("total").innerHTML +=
      "<p>Your production in shed D is " + data.shedD + " litres per day</p>";

    dailyIncome = sumData * 45;
}
