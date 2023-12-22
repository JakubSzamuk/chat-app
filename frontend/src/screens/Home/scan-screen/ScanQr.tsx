import { View, Text, PermissionsAndroid, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import useContactsStore, { StoredContact } from '../../../stores/Contacts';

const ScanQr = ({ navigation }) => {
  const { tempContact, setTempContact } = useContactsStore((state) => state);

  const onSuccess = (e) => {
    console.log(e.data);
    setTempContact({ ...JSON.parse(e.data) })


    // navigation.navigate()
  }

  return (
    <QRCodeScanner onRead={onSuccess} />
  )
}

export default ScanQr