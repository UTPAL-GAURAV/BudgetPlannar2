
  function showTemplate(x) 
  {
    var budget = document.getElementById("idIframeBudget");
    var addIncome = document.getElementById("idIframeAddIncome");
    var transfer = document.getElementById("idIframeTransfer");
    var settings = document.getElementById("idIframeSettings");

    if(x==1 || x==0)
    {
        budget.style.display = "block";
        addIncome.style.display = "none";
        transfer.style.display = "none";
        settings.style.display = "none";
    }
    else if(x==2)
    {
        budget.style.display = "none";
        addIncome.style.display = "block";
        transfer.style.display = "none";
        settings.style.display = "none";
    }
    else if(x==3)
    {
        budget.style.display = "none";
        addIncome.style.display = "none";
        transfer.style.display = "block";
        settings.style.display = "none";
    }
    else
    {
        budget.style.display = "none";
        addIncome.style.display = "none";
        transfer.style.display = "none";
        settings.style.display = "block";
    }
  }