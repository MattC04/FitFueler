import React from 'react';
import { Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
const SUPPORTED_ORIENTATIONS = [
    'portrait',
    'portrait-upside-down',
    'landscape',
    'landscape-left',
    'landscape-right',
];
export default function MessageWrapper({ children, disableSafeAreaView, style, }) {
    return (<Modal transparent visible supportedOrientations={SUPPORTED_ORIENTATIONS}>
      <SafeAreaProvider>
        {disableSafeAreaView ? (children) : (<SafeAreaView style={[styles.messageWrapper, style]}>
            {children}
          </SafeAreaView>)}
      </SafeAreaProvider>
    </Modal>);
}
