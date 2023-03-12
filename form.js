function ereq(emailid){
    if(document.getElementById(emailid).value === ""){
        alert("Email Required*");
    }
   }

  function fillCountry(){
    let countryName;
    let cityEntered = document.getElementById("city").value;
    switch (cityEntered){
        case "Islamabad":
            countryName = "Pakistan";
            break;
        case "Lahore":
            countryName = "Pakistan";
            break;
        case "Karachi":
            countryName = "Pakistan";
            break;
        case "Newyork":
            countryName = "USA";
            break;
        case "Los Angeles":
            countryName = "USA";
            break;
        default :
            countryName = "None";
            break;              
    }
    document.getElementById("country").value = countryName;
  }



  function expandPara(){
    var paragraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById('abc').innerHTML = paragraph;
  }