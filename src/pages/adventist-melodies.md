---
title: 'Adventist Melodies'
date: '2020-12-03'
type: 'blog'
---

For the last few months, I have been working on an application that allows users to sing their favourite hymns. In this article I'll talk a little bit about the code I wrote for this app.

<h3>Download</h3>
<p>You can download the app for ios <a href="https://apps.apple.com/in/app/adventist-melodies/id1530974313?ls=1" target="__blank">here</a></p>
<p>You can download the app for android <a href="https://play.google.com/store/apps/details?id=com.brianbawuah.adventistmelodies" target="__blank">here</a></p>
<p>If you like our work and want to help us, you could rate our application and / or leave a donation. Contributions and donations will be used for covering existing server costs, supporting new and exciting projects and helping small churches.
<br/>
<a href="https://www.paypal.com/pools/c/8sCczet3Kl"  target="__blank">Donate</a>
</p>
<h3>What did use for this app?</h3>
<h4>Typescript</h4>
<p>
TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
</p>
<h4>React native</h4>
<p>
React-native makes it possible to create platform-specific versions of components so a single codebase can share code across platforms. With React Native, you can maintain two platforms and share a common technology, React.
</p>
<h3>Entry point </h3>

Here in `App.tsx` you can find the entry point of the application.

```typescript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './src/domain/MainNavigator/MainNavigator'
import SplashScreen from 'react-native-splash-screen'

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
```

<h3>Navigation</h3>

<p>For this application, I used a bottom tab navigator from <a href="https://reactnavigation.org/" target="__blank">@react-navigation</a>. I also wrote a small function which checks whether the phone is on darkmode or light and displays the navigator is the right color.
</p>

<p>
A lot of apps use two different navigators on a screen. A bottom tab navigator and a stack navigator. The hymnal app has the same structure.
<br/>
<br/>
Every page on the main navigator has a stack navigator that makes it possible to move to different pages on a deeper level.
<br/>
<br/>
For the two navigators to work correctly, we navigate from the main navigation to a 'deeper' secondary 'stack' navigation.
</p>

```typescript
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../HomePage/Home'
import { Favourites } from '../Favourites/Favourites'
import Icon from 'react-native-vector-icons/FontAwesome'
import { MenuStackList } from '../MenuPage/MenuStackList'
import { useColorScheme } from 'react-native'
import { colors } from '../utils/colors'

const Tab = createBottomTabNavigator()

export type RootStackParamList = {
  Favourites: undefined
  Home: undefined
  Search: undefined
}

export const MainNavigator: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: getThemeStyle()
        },
        tabStyle: {
          width: 100,
          height: 50
        },
        activeTintColor: '#2F557F'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MenuStackList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="navicon" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )

  function getThemeStyle(): string {
    const color = isDarkMode ? colors.tint.black : colors.tint.white
    return color
  }
}
```

<p>Here is the code of how the stack navigator for the home page looks like. This stack navigator shows the homepage where the use can choose a song to sing an navigate to the song page.</p>

```typescript
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomePage } from './HomePage'
import { SongPage } from '../SongPage/SongPage'
import { HomeStackParamList, HomeNavProps } from './HomeParamList'
import { Platform, PlatformColor, useColorScheme } from 'react-native'
import { colors } from '../utils/colors'

const Stack = createStackNavigator<HomeStackParamList>()

export const Home: React.FC<HomeNavProps<'Home'>> = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: getBackgroundColor()
        },
        headerTintColor: getThemeStyle(),
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Adventist Melodies'
        }}
      />
      <Stack.Screen name="Song" component={SongPage} />
    </Stack.Navigator>
  )

  function getThemeStyle(): string {
    const color = isDarkMode ? colors.tint.white : colors.tint.black
    return color
  }

  function getBackgroundColor() {
    if (Platform.OS === 'ios') {
      return PlatformColor('systemBackground')
    }

    if (isDarkMode) {
      return colors.tint.black
    }

    return colors.tint.white
  }
}
```

<h3>State Management</h3>

<p>State management is an integral part of developing JavaScript applications especially React and React Native applications. It is the data that your components are working with. It holds the data that a component requires and it dictates what a component renders. State management is the process of managing how the state gets updated and passed from one component to another. 
</p>

<p>
There are alot of state management libraries for React Native. For this project I used MobX, basically because of its simplicity. Here is how our store looks like.
</p>

```typescript
import { observable, action, computed, reaction } from 'mobx'
import { createContext } from 'react'
import Sound from 'react-native-sound'

export type Audio = Sound | null

Sound.setCategory('Playback')
class AppState {
  @observable private list: string[] = []
  @observable private fontSize: number = 18
  @observable private sound: Audio = null

  public constructor() {
    reaction(
      () => this.list,
      (_) => null
    )
  }

  @computed public get favoriteList(): string[] {
    return this.list
  }

  @computed public get getFontSize(): number {
    return this.fontSize
  }

  @computed public get getSong(): Audio {
    return this.sound
  }

  @action public addSong(song: string): void {
    this.list.push(song)
  }

  @action public replaceList(songs: any[]): void {
    this.list = songs
  }

  @action public removeSong(song: string): void {
    const index = this.list.indexOf(song)
    if (index > -1) {
      this.list.splice(index, 1)
    }
  }

  @action public editFontSize(fontSize: number): void {
    this.fontSize = fontSize
  }

  @action public setSong(audio: Audio): void {
    this.sound = audio
  }
}

export default createContext(new AppState())
```

<h3>Wanna know more? Let's chat!</h3>
<p>These are just some code snippets. Do you know more about this app? Send me a message! I would love to talk code and learn from others :)</p>

<p>Thanks for reading!</p>
