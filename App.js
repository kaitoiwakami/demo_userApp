/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
       Text, 
       View,
       StyleSheet,
       ScrollView,
       TouchableOpacity,
       Image,
       } from 'react-native';
import { 
        createMaterialTopTabNavigator,
        createAppContainer 
       } from 'react-navigation';

//ホーム画面コンテンツ
class recommendedScreen extends React.Component {
render() {
  return (
      <View style={design.container}>
        <ScrollView>
          <TouchableOpacity style={design.menuItem}>
            <Image
            style={design.menuImage}
            source={require('./images/salad.jpg')}
            >
            </Image>
            <View style={design.menuInfo}>
              <Text>シェフサラダ</Text>
              <Text>620円</Text>
            </View>
            <View style={design.button}>
              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={design.menuItem}>
            <Image
            style={design.menuImage}
            source={require('./images/tomato.jpg')}
            >
            </Image>
            <View style={design.menuInfo}>
              <Text>トマトパスタ</Text>
              <Text>720円</Text>
            </View>
            <View style={design.button}>
              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>1</Text>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={design.menuItem}>
            <Image
            style={design.menuImage}
            source={require('./images/pizza.jpg')}
            >
            </Image>
            <View style={design.menuInfo}>
              <Text>マルゲリータ</Text>
              <Text>950円</Text>
            </View>
            <View style={design.button}>
              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={design.menuItem}>
            <Image
            style={design.menuImage}
            source={require('./images/carbonara.jpg')}
            >
            </Image>
            <View style={design.menuInfo}>
              <Text>カルボナーラ</Text>
              <Text>900円</Text>
            </View>
            <View style={design.button}>
              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={design.confirmContainer}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>注文の合計： 720円</Text>
          <TouchableOpacity style={design.confirm}>
            <Text style={{fontWeight: 'bold'}}>注文確認</Text>
          </TouchableOpacity>
        </View>
        <View style={design.globalMenu}>
          <TouchableOpacity>
            <Image style={design.globalMenuIcon} source={require('./images/store.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={design.globalMenuIcon} source={require('./images/receipt.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={design.globalMenuIcon} source={require('./images/user.jpg')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//料理画面コンテンツ
class foodScreen extends React.Component {
render() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>料理</Text>
      </View>
    );
  }
}

//飲み物画面コンテンツ
class drinkScreen extends React.Component {
render() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>飲み物</Text>
      </View>
    );
  }
}

//ナビゲーションバー
class AppTabNavigation extends React.Component {
render() {
  const { navigation } = this.props;
  const { routes, index } = this.props.navigation.state;
  const {
  containerStyle,
  tabStyle,
  selectedTabStyle,
  textStyle,
  selectedTextStyle,
  } = styles;
  return (
      <View style={containerStyle}>
        {routes.map((route, idx) => {
          if (index === idx) {
            return (
              <View key={idx} style={[tabStyle, selectedTabStyle]}>
                <Text style={[textStyle, selectedTextStyle]}>{route.routeName}</Text>
              </View>
            );
          }
            return (
              <TouchableOpacity
              style={tabStyle}
              key={idx}
              onPress={() => { navigation.navigate(route.routeName); }}
              >
                <Text style={textStyle}>{route.routeName}</Text>
              </TouchableOpacity>
            );
        })}
      </View>
  );
}
}

//ナビゲーションバースタイル
const styles = {
  containerStyle: {
    paddingTop: 70,
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fa8072',
  },
  tabStyle: {
    flex: 1,
    marginRight: 1,
    marginLeft: 1,
    height: 40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'black',
  },
  selectedTabStyle: {
    backgroundColor: 'white', 
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 14,
    color: 'white'
  },
  selectedTextStyle: {
    color: 'black',
  },
}

//ページ構造
const RootStack = createMaterialTopTabNavigator({
  Recommended: {
    screen: recommendedScreen,
  },
  Food: {
    screen: foodScreen,
  },
  Drink: {
    screen: drinkScreen,
  }
},{
  initialRouteName: 'Recommended',
  tabBarComponent: AppTabNavigation,
  }
);

//コンテンツスタイル
const design = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  menuItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuImage: {
    width: 175,
    height: 150,
    marginRight: 20,
  },
  menuInfo: {
    fontWeight: 'bold',
    paddingTop: 60,
  },
  button: {
    paddingLeft: 50,
    paddingVertical: 50,
  },
  confirmContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'black',
    opacity: 0.8,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 50,
    justifyContent: 'space-between',
  },
  confirm: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  globalMenu: {
    flexDirection: 'row',
    height: 70,
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'space-between',
  },
  globalMenuIcon: {
    height: 20,
    width: 20,
  },
});

const App = createAppContainer(RootStack);
export default App;