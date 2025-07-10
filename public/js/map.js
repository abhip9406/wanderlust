maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: "map",
  style: "https://api.maptiler.com/maps/streets-v2/style.json",
  center: listing.geometry.coordinates,
  zoom: 10,
});

new maptilersdk.Marker({ color: 'red' })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location wil be provided after booking</p>`
    )
  )
  .addTo(map);