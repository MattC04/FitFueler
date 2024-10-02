import { useDeprecationWarning as useDeprecationWarningBase, } from '@aws-amplify/ui-react-core';
import { platform } from '../../utils';
/**
 * Logs a deprecation warning `message` to the console.
 */
const useDeprecationWarning = ({ message, shouldWarn: _shouldWarn, }) => {
    // only log warnings in dev
    const shouldWarn = _shouldWarn && platform.IS_DEV;
    useDeprecationWarningBase({ message, shouldWarn });
};
export default useDeprecationWarning;
