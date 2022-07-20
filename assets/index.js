function showTotal() {
    event.preventDefault();
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

    document.getElementById("total").innerHTML += "<Br>";
  
    document.getElementById("total").innerHTML += "<hr>";
  
    document.getElementById("total").innerHTML +=
      "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";
  
    document.getElementById("total").innerHTML += "<hr>";
    
    weeklyIncome = dailyIncome * 7;
  
    document.getElementById("total").innerHTML +=
      "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";
  
    document.getElementById("total").innerHTML += "<hr>";
  
    document.getElementById("total").innerHTML += "<Br>";

    newDailyIncome = sumData * 49.6;

    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = newdailyIncome * 30;
    incomeDecember = newdailyIncome * 31;
    newIncomeInLeapYear = 366 * 49.6;

    incomeJanuaryDifference = newIncomeJanuary - incomeJanuary;
    incomeFebruaryDifference = newIncomeFebruary - incomeFebruary;
    incomeMarchDifference = newIncomeMarch - incomeMarch;
    incomeAprilDifference = newIncomeApril - incomeApril;
    incomeMayDifference = newIncomeMay - incomeMay;
    incomeJuneDifference = newIncomeJune - incomeJune;
    incomeJulyDifference = newIncomeJuly - incomeJuly;
    incomeAugustDifference = newIncomeAugust - incomeAugust;
    incomeSeptemberDifference = newIncomeSeptember - incomeSeptember;
    incomeOctoberDifference = newIncomeOctober - incomeOctober;
    incomeNovemberDifference = newIncomeNovember - incomeNovember;
    incomeDecemberDifference = newIncomeDecember - incomeDecember;

    document.getElementById("total").innerHTML +=
    "<h3> Comparison and difference in income per month for different prices </h3>";
    
    document.getElementById("total").innerHTML +=
      "<p>January: At price = Ksh. 45, you earn: Ksh. " +
      incomeJanuary +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeJanuary) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeJanuaryDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>February: At price = Ksh. 45, you earn: Ksh. " +
      incomeFebruary +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeFebruary) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeFebruaryDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>March: At price = Ksh. 45, you earn: Ksh. " +
      incomeMarch +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeMarch) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeMarchDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>April: At price = Ksh. 45, you earn: Ksh. " +
      incomeApril +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeApril) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeAprilDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>May: At price = Ksh. 45, you earn: Ksh. " +
      incomeMay +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeMay) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeMayDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>June: At price = Ksh. 45, you earn: Ksh. " +
      incomeJune +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeJune) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeJuneDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>July: At price = Ksh. 45, you earn: Ksh. " +
      incomeJuly +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeJuly) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeJulyDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>August: At price = Ksh. 45, you earn: Ksh. " +
      incomeAugust +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeAugust) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeAugustDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>September: At price = Ksh. 45, you earn: Ksh. " +
      incomeSeptember +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeSeptember) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeSeptemberDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>October: At price = Ksh. 45, you earn: Ksh. " +
      incomeOctober +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeOctober) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeOctoberDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>November: At price = Ksh. 45, you earn: Ksh. " +
      incomeNovember +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeNovember) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeNovemberDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "\n";
    document.getElementById("total").innerHTML +=
      "<p>December: At price = Ksh. 45, you earn: Ksh. " +
      incomeDecember +
      ". At price = 49.60, you earn Ksh. " +
      Math.round(newIncomeDecember) +
      ". The difference, rounded off to the nearest value, is Ksh. " +
      Math.round(incomeDecemberDifference) +
      ".</p>";
    document.getElementById("total").innerHTML += "<Br>";
}

