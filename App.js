import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import * as Location from "expo-location";

import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [minhaLocalizacao, setminhaLocalizacao] = useState(null);

  // obter permissão da minha localização
  useEffect(() => {
    async function obterLocalizacao() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Ops", "Você não autorizou o uso da geolocalizacao");
        return;
      }
      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      setminhaLocalizacao(localizacaoAtual);
    }
    obterLocalizacao();
  }, []);

  const [localizacao, setLocalizacao] = useState({
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  });
  const regiaoInicialMapa = {
    latitude: -23.5489,
    longitude: -46.6388,

    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  };
  const marcarLocal = (event) => {
    // console.log(event.nativeEvent);
    setLocalizacao({
      ...localizacao,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <View style={estilos.viewBotao}>
          <Button onPress={marcarLocal} title="Onde estou?"></Button>
        </View>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
          mapType="hybrid"
        >
          <Marker coordinate={localizacao} draggable />
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});
