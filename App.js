import { StatusBar, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    latitude: -10,
    longitude: -55,
    // Definição do zoom, Quanto menor mais próximo do mapa
    latitudeDelta: 40,
    longitudeDelta: 40,
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          mapType="standard"
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});
