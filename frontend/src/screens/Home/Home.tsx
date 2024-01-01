import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, StandardBackground } from '../../constants/colors'
import { UtilityStyles } from '../../styles/utility'
import Logo from '../reusable/Logo'
import { FontStyles } from '../../styles/text'
import LinearGradient from 'react-native-linear-gradient'
import { ArrowLeft, CellSignalNone, Check, PencilSimple, Plus, Trash } from 'phosphor-react-native'
import useContactsStore from '../../stores/Contacts'

const ChatCard = ({ navigation, optionSet, setOption, removeSelected, setSelected, name, id }: any) => {
  const [chosen, setChosen] = useState(false)
  useEffect(() => {
    if (!optionSet) {
      setChosen(false)
    }
  }, [optionSet])

  
  
  return (
    <TouchableOpacity
      onLongPress={() => {
        if (optionSet) {
          setChosen(true)
        } else {
          setOption(true)
          setChosen(true)
        }
      }}
     onPress={() => {
        if (optionSet) {
          setChosen(!chosen)
          if (chosen) {
            removeSelected(id);
          } else {
            setSelected(id)
          }
        } else {
          navigation.navigate("chat", { recipient_id: id })
        }
      }}>
      <StandardBackground withBorder style={{ borderRadius: 3 }}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', marginRight: 10 }}>
              <View style={{ height: 76, width: 76, backgroundColor: Color.secondary, borderRadius: 6, elevation: 20, shadowColor: Color.shadow }}>
                {
                  chosen && (
                    <View style={{ position: 'absolute', bottom: 4, right: 4 }}>
                      <Check size={32} color={Color.primary} />
                    </View>
                  )
                }
              </View>
            </View>
            <View>
              <Text style={FontStyles.StandardText}>{name}</Text>
              <Text style={FontStyles.MediumText}>Hello, Whats up?</Text>
            </View>
          </View>
          <Text style={FontStyles.MediumText}>12h</Text>
        </View>
      </StandardBackground>
    </TouchableOpacity>
  )
}


const Home = ({ navigation }) => {
  const { contacts, removeContact } = useContactsStore((state) => state);

  const [optionsEnabled, setOptionsEnabled] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const addSelected = (id: string) => {
    setSelectedContacts([...selectedContacts, id])
  };
  const removeSelected = (id: string) => {
    setSelectedContacts(selectedContacts.filter((contactId) => contactId !== id))
  };


  const deleteSelected = () => {
    selectedContacts.forEach((contactId) => {
      removeContact(contactId);
    });
    setSelectedContacts([]);
    setOptionsEnabled(false);
  };


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
          <View style={{ paddingHorizontal: 25, paddingTop: 15, flexDirection: 'row', alignItems: 'center', height: 50 }}>
            {
              optionsEnabled && (
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setOptionsEnabled(false)}>
                  <ArrowLeft size={32} color={Color.primary} />
                </TouchableOpacity>
              )
            }
            <View style={{ flex: 1 }}>
              <Text style={FontStyles.StandardText}>{optionsEnabled ? "Edit" : "Messages"}</Text>
            </View>

            {
              optionsEnabled ? (
                <>
                  <TouchableOpacity>
                    <PencilSimple size={34} color={Color.primary} />
                  </TouchableOpacity>
                
                  <TouchableOpacity style={{ marginLeft: 6 }} onPress={deleteSelected}>
                    <Trash size={34} color={Color.primary} />
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setOptionsEnabled(!optionsEnabled)}>
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
                </TouchableOpacity>
              )
            }

            
          </View>
          <View style={{ paddingHorizontal: 10, marginTop: 16 }}>
            <FlatList
              renderItem={(contactItem) => (
                <ChatCard key={contactItem.index} navigation={navigation} optionSet={optionsEnabled} setOption={setOptionsEnabled} setSelected={addSelected} removeSelected={removeSelected} {...contactItem.item} />
              )}
              contentContainerStyle={{ gap: 10 }}
              data={contacts}
            />
          </View>
          <View style={{ position: 'absolute', right: 8, bottom: 140 }}>
            <TouchableOpacity onPress={() => navigation.navigate("add_chat")}>
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