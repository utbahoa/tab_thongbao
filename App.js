import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 200, marginTop: 200 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{ backgroundColor: 'black', borderRadius: 30, marginTop: 5, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 15 }}>Vui lòng đăng nhập để tiếp tục</Text>
    </View>
  </View>

);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 200, marginTop: 200 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{ backgroundColor: 'black', borderRadius: 30, marginTop: 5, padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 15 }}>Vui lòng đăng nhập để tiếp tục</Text>
    </View>
  </View>

);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'silver', flex: 1, alignItems: 'center' }]}>
    <Image style={{ width: 200, height: 180, marginTop: 180 }} source={{ uri: "https://i.imgur.com/o7YgSuE.png" }}></Image>
    <View style={{marginTop: 10}}>
      <Text style={{ color: 'black', fontSize: 15 }}>không có dữ liệu</Text>
    </View>
  </View>

);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Dịch vụ' },
    { key: 'second', title: 'Của tôi' },
    { key: 'third', title: 'Tin mới' },

  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'red', flexDirection: 'row' }}>
      <View style={{ marginVertical: 10, marginLeft: 10}}>
          <AntDesign name="setting" size={30} color="#fff" />
        </View>
        <View style={{ marginLeft:110}}>
          <Text style={{ paddingHorizontal: 10, color: '#fff', marginVertical: 5, fontSize: 25, }}>Thông báo</Text>
        </View>
        <View style={{ marginLeft:100, marginVertical: 10}}>
          <FontAwesome5 name="search" size={30} color="#fff" />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  });
