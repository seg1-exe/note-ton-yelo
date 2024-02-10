# Note ton Yelo !

*en cours de développement*

-- npm install url-parse

inputSubmit.addEventListener('click', () => {
 

  //Vérif si les inputs ne sont pas vides
  if(!bikeInput.value == "") {
    
    //Véficitaion de la validité de l'identifiant du vélo
    if(!bikeInput.value == "" && bikeInput.value > 1000 && bikeInput.value < 9999){
      const idOfBike = bikeInput.value;

      bikeOutput.innerHTML = idOfBike;
      
    } else {
      alert("Merci de renseigner un identifiant de vélo valide.");
    }  
  } else {
    //Si les inputs sont vides
    alert("Merci de renseigner un lien valide ou un identifiant de vélo.");
  }
});