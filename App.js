import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
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
      // Acessando o staus da requisição de permissão de uso dos recursos de egeolocalização
      const { status } = await Location.requestForegroundPermissionsAsync();

      // Se o status não for liberado/permitido, então será dado um alerta notificando o usuario
      if (status !== "granted") {
        Alert.alert("Ops", "Você não autorizou o uso da geolocalizacao");
        return;
      }

      // Se o status  estiver OK, obtemos os dados da localizacao atual. E atualizamos o state da minhaLocalizacao
      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      setminhaLocalizacao(localizacaoAtual);
    }
    obterLocalizacao();
  }, []);

  console.log(minhaLocalizacao);

  // Este state tem a finalidade de determinar a posição/localização no MapView junto com o Marker
  // Inicialmete é nulo pois o usuario ainda não acionou o botão da sua localização
  const [localizacao, setLocalizacao] = useState(null);

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
      <SafeAreaView style={estilos.container}>
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
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});
