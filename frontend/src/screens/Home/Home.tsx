import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, StandardBackground } from '../../constants/colors'
import { UtilityStyles } from '../../styles/utility'
import Logo from '../reusable/Logo'
import { FontStyles } from '../../styles/text'
import LinearGradient from 'react-native-linear-gradient'
import { CellSignalNone, Plus } from 'phosphor-react-native'

const ChatCard = () => {
  return (
    <StandardBackground withBorder>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', marginRight: 10 }}>
            <View style={{ height: 76, width: 76, backgroundColor: Color.secondary, borderRadius: 6, elevation: 20, shadowColor: Color.shadow }}></View>
          </View>
          <View>
            <Text style={FontStyles.StandardText}>Jakub Szamuk</Text>
            <Text style={FontStyles.MediumText}>Hello, Whats up?</Text>
          </View>
        </View>
        <Text style={FontStyles.MediumText}>12h</Text>
      </View>
    </StandardBackground>
  )
}



const Home = () => {
  return (
    <SafeAreaView>
      <StandardBackground style={UtilityStyles.mainBackground}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 30 }}>
          <View style={{ flex: 1 }}>
            <Logo />
          </View>
          <View>
            <FlatList
              renderItem={
                (key) => (
                  <View key={key} style={{ margin: 4, width: 8, height: 8, borderRadius: 30, backgroundColor: Color.primary }}></View>
                )
              }
              data={[...Array(4).keys()]}
              contentContainerStyle={{ alignItems: 'center' }}
              numColumns={2}
            />
          </View>
        </View>
        <StandardBackground withBorder style={{ borderRadius: 20, height: "100%" }}>
          <View style={{ paddingHorizontal: 25, paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={FontStyles.StandardText}>Messages</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <FlatList
                renderItem={
                  (key) => (
                    <View key={key} style={{ margin: 2, width: 8, height: 8, borderRadius: 30, backgroundColor: Color.primary }}></View>
                  )
                }
                contentContainerStyle={{ alignItems: 'center' }}
                horizontal
                data={[...Array(3).keys()]}
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, marginTop: 16 }}>
            <FlatList
              renderItem={(key) => (
                <ChatCard key={key} />
              )}
              contentContainerStyle={{ gap: 10 }}
              data={[...Array(3).keys()]}
            />
          </View>
          <View>
            <TouchableOpacity>
              <StandardBackground withBorder style={{ padding: 12, borderRadius: 100, width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <LinearGradient
                  colors={["#F3F3F3", "#575B5C"]}
                  style={{ borderRadius: 100, height: "100%", width: "100%", padding: 4 }}
                >
                  <LinearGradient 
                    colors={["#ABACAC", "#949494"]}
                    style={{ borderRadius: 100, height: "100%", width: "100%", alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Plus color="#252525" size={32} />
                  </LinearGradient>
                </LinearGradient>
              </StandardBackground>
            </TouchableOpacity>

          </View>
        </StandardBackground>
      </StandardBackground>
    </SafeAreaView>
  )
}

export default Home