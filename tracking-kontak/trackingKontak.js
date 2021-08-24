function submit()
{
  let form = document.getElementsByClassName("form");document.getElementById("suratPositif").setAttribute("disabled", "disabled");
  document.getElementById("konfirmasiPengirimanFormulir").style.visibility = "visible";
  let opacity = document.getElementById("opacity");opacity.style.opacity = "0.25";
  opacity.style.backgroundColor = "lightgrey";
  document.getElementById("submitFormulir").readOnly = true;
  document.getElementsByClassName("radioIsolasi")[0].setAttribute("disabled", "disabled");
  document.getElementsByClassName("radioIsolasi")[1].setAttribute("disabled", "disabled");
  document.getElementById("btnPlus").removeAttribute("onclick");
  document.getElementById("btnExit").removeAttribute("href");

  for(let i = 0; i < form.length; i++)
  {
    form[i].readOnly = true; 
  }
}

function tambahFormulir()
{
  let br = document.createElement("br");
  let boldText = document.createElement("b");
  let boldText2 = document.createElement("b");
  let boldText3 = document.createElement("b");

  let tanggalBepergianText = document.createElement("p");
  tanggalBepergianText.innerHTML = "Tanggal Bepergian"; 
  tanggalBepergianText.setAttribute("class", "teksInput");
  
  let tanggalBepergian = document.createElement("input");
  tanggalBepergian.setAttribute("type", "date");
  tanggalBepergian.setAttribute("class", "inputForm form tglBepergian");

  let jamPergiText = document.createElement("p");
  jamPergiText.innerHTML = "Jam Bepergian"; 
  jamPergiText.setAttribute("class", "teksInput");

  let jamPergi = document.createElement("input");
  jamPergi.setAttribute("type", "time");
  jamPergi.setAttribute("class", "inputForm form jamPergi");

  let jamPulangText = document.createElement("p");
  jamPulangText.innerHTML = "Jam Pulang"; 
  jamPulangText.setAttribute("class", "teksInput");

  let jamPulang = document.createElement("input");
  jamPulang.setAttribute("type", "time");
  jamPulang.setAttribute("class", "inputForm form jamPulang");

  let br2 = document.createElement("br");

  let box = document.getElementById("formNew");

  boldText.appendChild(tanggalBepergianText);
  boldText2.appendChild(jamPergiText);
  boldText3.appendChild(jamPulangText);

  box.appendChild(br);
  box.appendChild(br);
  box.appendChild(br);
  box.appendChild(boldText);
  box.appendChild(tanggalBepergian);
  box.appendChild(boldText2);
  box.appendChild(jamPergi);
  box.appendChild(boldText3);
  box.appendChild(jamPulang);
  box.appendChild(br2);
  box.appendChild(br2);
  box.appendChild(br2);
}

function batalSubmit()
{
  let form = document.getElementsByClassName("form");document.getElementById("suratPositif").removeAttribute("disabled");
  document.getElementById("konfirmasiPengirimanFormulir").style.visibility = "hidden";
  let opacity = document.getElementById("opacity");opacity.style.opacity = "1";
  opacity.style.backgroundColor = "white";
  document.getElementById("submitFormulir").readOnly = false;
  document.getElementsByClassName("radioIsolasi")[0].removeAttribute("disabled");
  document.getElementsByClassName("radioIsolasi")[1].removeAttribute("disabled");
  document.getElementById("btnPlus").setAttribute("onclick", "tambahFormulir()");
  document.getElementById("btnExit").setAttribute("href", "https://covibreak-markoding01.markoding01.repl.co/apakah-mau-memberi-info.html");

  for(let i = 0; i < form.length; i++)
  {
    form[i].readOnly = false; 
  }
}

var loadFile = function(event)
{
  var output = document.getElementById('tempatFoto');
  output.src = URL.createObjectURL(event.target.files[0]);
};

function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

function yaKirim()
{
  let tempatPergi = document.getElementById("pac-input").value;
  localStorage.setItem("tempatPergi", tempatPergi);
  let tanggalPergi = document.getElementById("tglBepergian").value;
  localStorage.setItem("tanggalPergi", tanggalPergi);
  let jamPergi = document.getElementById("jamPergi").value;
  localStorage.setItem("jamPergi", jamPergi);
  let jamPulang = document.getElementById("jamPulang").value;
  localStorage.setItem("jamPulang", jamPulang);
}