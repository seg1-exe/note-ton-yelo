const yeloInput = document.getElementById('yelo-input');
const bikeInput = document.getElementById('bike-input');
const inputSubmit = document.getElementById('input-submit');
const bikeOutput = document.getElementById('bike-id');

const myBike = document.getElementById('my-bike');

const radiosButtons = document.querySelectorAll('input[name="rating"]');
const ratingSubmit = document.getElementById('rating-submit');
const ratingOutput = document.getElementById('rating-output');

inputSubmit.addEventListener('click', () => {
  //url = https://freebike.app.link/?bikeId=0000&system=larochelle
  if(!yeloInput.value == "" || !bikeInput.value == "") {
    if(bikeInput.value > 1000 && bikeInput.value < 9999){
      const idOfBike = bikeInput.value;
      bikeOutput.innerHTML = idOfBike;
    } else {
      alert("Merci de renseigner un identifiant de vélo valide.");
    }

    if(!yeloInput.value == ""){
      const url = yeloInput.value;
      const parts = url.split("?");
      const query = parts[1].split("&");
      const bikeId = query[0].split("=")[1];
      bikeOutput.innerHTML = bikeId;
    }

    myBike.style.display = "block";
  } else {
    alert("Merci de renseigner un lien valide ou un identifiant de vélo.");
  }
});

ratingSubmit.addEventListener('click', () => {
  let ratingSelected;
  for (const radioButton of radiosButtons) {
      if (radioButton.checked) {
          ratingSelected = radioButton.value;
          break;
      }
  }

  ratingOutput.innerHTML = ratingSelected;
});
