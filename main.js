import parse from 'url-parse';

const yeloInput = document.getElementById('yelo-input');
const bikeInput = document.getElementById('bike-input');
const inputSubmit = document.getElementById('input-submit');
const bikeOutput = document.getElementById('bike-id');

const myBike = document.getElementById('my-bike');

const radiosButtons = document.querySelectorAll('input[name="rating"]');
const ratingSubmit = document.getElementById('rating-submit');
const ratingOutput = document.getElementById('rating-output');



inputSubmit.addEventListener('click', () => {

  if (yeloInput.value == "" && bikeInput.value == ""){
    //Si les deux inputs sont vides
    alert("Merci de renseigner un lien ou un numéro de vélo.");
  } else if (!yeloInput.value == ""){
    //urltype = https://freebike.app.link/?bikeId=5131&system=larochelle
    const urlMere = "https://freebike.app.link/?bikeId=0000&system=larochelle";
    const url = yeloInput.value;

    const parsedUrlMere = parse(urlMere);
    const urlInput = parse(url);

    //On compare les deux urls pour vérifier qu'elles sont similaires
    const areSimilar = parsedUrlMere.hostname === urlInput.hostname && parsedUrlMere.pathname === urlInput.pathname;
    console.log(areSimilar);

    //Si les urls sont similaires, on récupère l'id du vélo
    if (areSimilar == true){
      const parts = url.split("?");

      const query = parts[1].split("&");

      const bikeId = query[0].split("=")[1];
      console.log(bikeId);
      
      //On vérifie que l'id est bien compris entre 1000 et 9999
      if (bikeId > 1000 && bikeId < 9999){
        bikeOutput.innerHTML = bikeId;
        myBike.style.display = "block";
      } else {
        alert("Merci de renseigner un numéro de vélo valide.");
      }
    } else { 
      alert("Merci de renseigner un lien valide.");
    }
  } else if (!bikeInput.value == ""){
    const bikeId = bikeInput.value;

    //On vérifie que l'id est bien compris entre 1000 et 9999
    if (bikeId > 1000 && bikeId < 9999){
      bikeOutput.innerHTML = bikeId;
      myBike.style.display = "block";
    } else {
      alert("Merci de renseigner un numéro de vélo valide.");
    }
  }

   
});

ratingSubmit.addEventListener('click', () => {
  let ratingSelected;
  for (const radioButton of radiosButtons) {
      if (radioButton.checked) {
          ratingSelected = radioButton.value;
          ratingOutput.innerHTML = ratingSelected;
          break;
      } else {
          ratingOutput.innerHTML = "Merci de renseigner une note.";
      }
  }
});
