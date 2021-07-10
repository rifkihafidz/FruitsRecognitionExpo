import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../components';
import { IconDetail, IconHome, IconLoop } from '../../assets';


const Result = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.wrapper.mainWrapper}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          elevation: 5
        }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginTop: 6 }}>RESULT</Text>
      </View>
      <Gap height={6} />
      <View style={{ backgroundColor: 'yellow', flex: 2, marginHorizontal: 10 }}>

      </View>
      <Gap height={6} />
      <View style={{ backgroundColor: 'red', flex: 1, marginHorizontal: 10 }}>

      </View>
      <Gap height={6} />

      <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <IconDetail height={90} width={90} />
          <Gap height={6} />
          <Text style={styles.text.textMenu}>Details</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <IconLoop height={90} width={90} />
          <Gap height={6} />
          <Text style={styles.text.textMenu}>Scan Ulang</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <IconHome height={90} width={90} />
          <Gap height={6} />
          <Text style={styles.text.textMenu}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper.copyrightWrapper}>
        <Text style={styles.text.textCopyright}>© 2021 Muhammad Rifki Hafidz - All Rights Reserved</Text>
      </View>
    </View >
  )
}

export default Result

const styles = ({
  wrapper: {
    copyrightWrapper: {
      paddingBottom: 10
    },
    buahWrapper: {
      flex: 1, alignItems: 'center'
    },
    logoWrapper: {
      alignItems: 'center'
    },
    mainWrapper: {
      backgroundColor: '#98DDCA',
      flex: 1,
    },
  },
  text: {
    textCopyright: {
      fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
    textMenu: {
      fontSize: 16, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    }
  }
})
