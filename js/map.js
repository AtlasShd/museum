mapboxgl.accessToken = 'pk.eyJ1IjoidGxzc2hydWdnZWQiLCJhIjoiY2t4YWp0azRiM2l5ajJ5cHoycnkycHVtbSJ9.MfauE9Y-T_ZsuiaFdmj_Rw';
const map = new mapboxgl.Map({
	container: 'Contacts__location',
	style: 'mapbox://styles/mapbox/light-v10',
	center: [2.3363, 48.86095],
	zoom: 15.75,
});
map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker({ color: '#222' })
	.setLngLat([2.3364, 48.86091])
	.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Louvre</h3><p>Louvre museum and a large glass pyramid</p>`))
	.addTo(map);
new mapboxgl.Marker({ color: '#777' })
	.setLngLat([2.3333, 48.8602])
	.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Pavillon de la trémoille</h3><p>Very beautiful architecture</p>`))
	.addTo(map);
new mapboxgl.Marker({ color: '#777' })
	.setLngLat([2.3397, 48.8607])
	.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Cour Carrée</h3><p>One of the main courtyards of the Louvre Palace in Paris.</p>`))
	.addTo(map);
new mapboxgl.Marker({ color: '#777' })
	.setLngLat([2.333, 48.8619])
	.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Arc de Triomphe du Carrousel</h3><p>It is an example of Neoclassical architecture in the Corinthian order.</p>`))
	.addTo(map);
new mapboxgl.Marker({ color: '#777' })
	.setLngLat([2.3365, 48.8625])
	.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Subway station</h3><p>Palais-Royal - Musée du Louvre.</p>`))
	.addTo(map);
