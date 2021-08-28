const mocksCityMap = {
  Aceh: {
    center: { lat: 106.816666, lng: -6.200 },
    population: 28547,
  },
  "Sumatra Utara": {
    center: { lat: 2.1153547, lng: 99.5450974 },
    population: 84273,  
  },
  "Sumatra Barat": {
    center: { lat: -0.7399397, lng: 100.8000051 },
    population: 82738,
  },
  Riau: {
    center: { lat: 0.2933469, lng: 101.7068294 },
    population: 116792,
  },
  Jambi: {
    center: { lat: -1.61157, lng: 102.7797 },
    population: 25727,
  },
  "Sumatra Selatan": {
    center: { lat: -3.12668, lng: 104.09306 },
    population: 55545,
  },
  Bengkulu: {
    center: { lat: -3.51868, lng: 102.53598 },
    population: 21574,
  },
  Lampung: {
    center: { lat: -4.8555, lng: 105.0273 },
    population: 43397,
  },
  "Kepulauan Bangka Belitung": {
    center: { lat: -2.75775, lng: 107.58394 },
    population: 42795,
  },
  "Kepulauan Riau": {
    center: { lat: -0.15478, lng: 104.58037 },
    population: 50712,
  },
  "DKI Jakarta": {
    center: { lat:  6.1745, lng: 106.8227 },
    population: 842647,
    fillColor: 'red'
  },
  "Jawa Barat": {
    center: { lat: -6.88917, lng: 107.64047 },
    population: 660151,
    fillColor: 'yellow',
  },
  "Jawa Tengah": {
    center: { lat: -7.30324, lng: 110.00441 },
    population: 457259,
    fillColor: 'green',
  },
  "DI Yogyakarta": {
    center: { lat: 7.7956, lng: 110.3695 },
    population: 140898,
  },
  "Jawa Timur": {
    center: { lat: -6.96851, lng: 113.98005 },
    population: 363439,
  },
  Banten: {
    center: { lat: -6.44538, lng: 106.13756 },
    population: 125476,
  },
  Bali: {
    center: { lat: -8.23566, lng: 115.12239 },
    population: 98637,
  },
  "Nusa Tenggara Barat": {
    center: { lat: -8.12179, lng: 117.63696 },
    population: 23854,
  },
  "Nusa Tenggara Timur": {
    center: { lat: -8.56568, lng: 120.69786 },
    population: 54806,
  },
  "Kalimantan Barat": {
    center: { lat: -0.13224, lng: 111.09689 },
    population: 32512,
  },
  "Kalimantan Tengah": {
    center: { lat: -1.49958, lng: 113.29033 },
    population: 40875,
  },
  "Kalimantan Selatan": {
    center: { lat: -2.94348, lng: 115.37565 },
    population: 60376,
  },
  "Kalimantan Timur": {
    center: { lat:  0.78844, lng: 116.242 },
    population: 142434,
  },
  "Kalimantan Utara": {
    center: { lat:  0.78844, lng: 116.242 },
    population: 28876,
  },
  "Sulawesi Utara": {
    center: { lat: 0.65557, lng: 124.09015 },
    population: 30226,
  },
  "Sulawesi Tengah": {
    center: { lat: -1.69378, lng: 120.80886 },
    population: 36917,
  },
  "Sulawesi Selatan": {
    center: { lat: -3.64467, lng: 119.94719 },
    population: 98897,
  },
  "Sulawesi Tenggara": {
    center: { lat: -3.54912, lng: 121.72796 },
    population: 18846,
  },
  Gorontalo: {
    center: { lat: 0.71862, lng: 122.45559 },
    population: 10462,
  },
  "Sulawesi Barat": {
    center: { lat: -2.49745, lng: 119.3919 },
    population: 10746,
  },
  Maluku: {
    center: { lat: -3.11884, lng: 129.42078 },
    population: 14166,
  },
  "Maluku Utara": {
    center: { lat: 0.63012, lng: 127.97202 },
    population: 11284,
  },
  "Papua Barat": {
    center: { lat: -1.38424, lng: 132.90253 },
    population: 21671,
  },
  Papua: {
    center: { lat: -3.98857, lng:  138.34853 },
    population: 30693,
  },
};

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("zona-covid-map"), {
    center: { lat: -6.2000, lng: 106.816 },
    zoom: 8,
  });

  function cekWarna(population) {
    return (population >= 100000) ? "#ff0000"
      : (population >= 40000 && population < 100000) ? "#ff8800"
      : (population < 40000) ? "#ffea00"
  }

// for in
  for (const city in mocksCityMap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: cekWarna(mocksCityMap[city].population),
      strokeOpacity: 0.8,
      strokeWeight: 500,
      fillColor: cekWarna(mocksCityMap[city].population),
      fillOpacity: 0.35,
      map,
      center: mocksCityMap[city].center,
      radius: Math.sqrt(mocksCityMap[city].population) * 100,
    });
  }
}

[
	{
		"attributes": {
			"FID": 11,
			"Kode_Provi": 31,
			"Provinsi": "DKI Jakarta",
			"Kasus_Posi": 307,
			"Kasus_Semb": 22,
			"Kasus_Meni": 29
		}
	}
]	
