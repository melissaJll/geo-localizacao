import { Image, StatusBar, StyleSheet, View } from "react-native";

// Importação da biblioteca de mapa e o sub-componente "Marker"
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    // Brasil

    latitude: -23.5489,
    longitude: -46.6388,

    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };

  // Marker
  const localizacao = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
          mapType="hybrid"
        >
          <Marker coordinate={localizacao} draggable>
            <Image source={require("./assets/ghost.png")} />
          </Marker>
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});
