import { StatusBar, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    latitude: -23.533,
    longitude: -46.65,
    // Definição do zoom, Quanto menor mais próximo do mapa
    latitudeDelta: 40,
    longitudeDelta: 40,
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          mapType="hybrid"
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
          maxZoomLevel={15}
          minZoomLevel={5}
          // userInterfaceStyle="light"
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});
