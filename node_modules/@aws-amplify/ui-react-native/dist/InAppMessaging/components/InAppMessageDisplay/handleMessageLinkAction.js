import { Linking } from 'react-native';
import { ConsoleLogger as Logger } from 'aws-amplify/utils';
const logger = new Logger('InAppMessaging');
const handleMessageLinkAction = async (url) => {
    let supported = false;
    try {
        supported = await Linking.canOpenURL(url);
    }
    catch (e) {
        logger.warn(`Call to Linking.canOpenURL failed: ${e}`);
    }
    if (!supported) {
        logger.warn(`Unsupported url provided: ${url}`);
        return;
    }
    try {
        logger.info(`Opening url: ${url}`);
        await Linking.openURL(url);
    }
    catch (e) {
        logger.warn(`Call to Linking.openURL failed: ${e}`);
    }
};
export default handleMessageLinkAction;
