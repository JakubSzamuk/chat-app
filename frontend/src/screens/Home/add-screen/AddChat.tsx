import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color, StandardBackground } from '../../../constants/colors'
import { UtilityStyles } from '../../../styles/utility'
import { FontStyles } from '../../../styles/text'
import { Camera, CaretLeft, QrCode, Rows } from 'phosphor-react-native'
import Logo from '../../reusable/Logo'

const AddChat = () => {
  return (
    <SafeAreaView>
      <StandardBackground style={UtilityStyles.mainBackground}>
        <View style={{ flex: 1 }}>
          <Text style={[FontStyles.Header, { marginTop: 145, marginLeft: 60 }]}>Add Chat</Text>
          <View style={{ width: "100%", alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 16 }}>
              <StandardBackground withBorder style={{ borderRadius: 8, height: 70, width: 310 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ flex: 1, marginLeft: 30 }}>
                    <Text style={FontStyles.StandardText}>Scan Code</Text>
                  </View>
                  <View style={{ alignItems: 'center', marginRight: 14, justifyContent: 'center', padding: 6, backgroundColor: Color.secondary, borderRadius: 10 }}>
                    <Camera color={Color.text} size={48} />
                  </View>
                </View>
              </StandardBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 14 }}>
              <StandardBackground withBorder style={{ borderRadius: 8, height: 70, width: 310 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ flex: 1, marginLeft: 30 }}>
                    <Text style={FontStyles.StandardText}>Show QR</Text>
                  </View>
                  <View style={{ alignItems: 'center', marginRight: 14, justifyContent: 'center', padding: 6, backgroundColor: Color.secondary, borderRadius: 10 }}>
                    <QrCode color={Color.text} size={48} />
                  </View>
                </View>
              </StandardBackground>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 60, marginTop: 30 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CaretLeft color={Color.text} size={48} />
              <Text style={[FontStyles.StandardText, { marginLeft: -12 }]}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: "100%", alignItems: 'center', marginBottom: 20 }}>
          <Logo />
        </View>
      </StandardBackground>
    </SafeAreaView>
  )
}

export default AddChat