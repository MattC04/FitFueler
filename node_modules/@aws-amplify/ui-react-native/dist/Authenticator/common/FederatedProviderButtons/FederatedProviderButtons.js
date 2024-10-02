import React, { useMemo } from 'react';
import { View } from 'react-native';
import { authenticatorTextUtil, capitalize, } from '@aws-amplify/ui';
import { Divider } from '../../../primitives';
import { useTheme } from '../../../theme';
import { FederatedProviderButton } from '../FederatedProviderButton';
import { icons } from '../../../assets';
import { getThemedStyles } from './styles';
const { getSignInWithFederationText, getOrText } = authenticatorTextUtil;
export default function FederatedProviderButtons({ buttonStyle, dividerLabelStyle, route, socialProviders, style, toFederatedSignIn, }) {
    const theme = useTheme();
    const themedStyle = getThemedStyles(theme);
    const providerButtons = useMemo(() => socialProviders?.map((provider) => {
        const providerIconSource = icons[`${provider}Logo`];
        const handlePress = () => {
            toFederatedSignIn({ provider: capitalize(provider) });
        };
        return (<FederatedProviderButton key={provider} onPress={handlePress} source={providerIconSource} style={[themedStyle.button, buttonStyle]}>
            {getSignInWithFederationText(route, provider)}
          </FederatedProviderButton>);
    }), [route, socialProviders, themedStyle, buttonStyle, toFederatedSignIn]);
    return providerButtons?.length ? (<View style={[themedStyle.container, style]} testID="amplify__federated-provider-buttons">
      {providerButtons}
      <Divider labelStyle={[themedStyle.dividerLabel, dividerLabelStyle]}>
        {getOrText()}
      </Divider>
    </View>) : null;
}
