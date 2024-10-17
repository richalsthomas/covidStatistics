import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { covidData, CovidDataType } from "../../data/covidData";
import { useSelector } from "react-redux";

const iconSize = [40, 60]; //  [width, height]
const iconAnchor = [iconSize[0] / 2, iconSize[1]]; // Set anchor to bottom of icon

// Set the default icon for markers
const DefaultIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: iconSize as any,
  iconAnchor: iconAnchor as any,
});

// Assign the default icon to the marker class
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView() {
  const selectedStates = useSelector((state: any) => state?.selectedStates);

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {covidData
        ?.filter(
          (state) =>
            !selectedStates ||
            selectedStates?.length === 0 ||
            selectedStates?.includes(state.state)
        )
        .map((state: CovidDataType) => {
          const [lat, lng] = state.coordinates || [20.5937, 78.9629];

          return (
            <Marker key={state.state} position={[lat, lng]}>
              <Popup>
                <strong>{state.state}</strong>
                <br />
                Total Cases: {state.total_cases}
                <br />
                Active Cases: {state.active_cases}
                <br />
                Recovered: {state.recovered}
                <br />
                Death: {state.death}
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}
