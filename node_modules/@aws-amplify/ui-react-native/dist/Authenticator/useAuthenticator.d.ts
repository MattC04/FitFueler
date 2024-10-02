export { UseAuthenticator } from '@aws-amplify/ui-react-core';
import { useAuthenticator as _useAuthenticator, UseAuthenticator } from '@aws-amplify/ui-react-core';
type UseAuthenticatorSelector = Parameters<typeof _useAuthenticator>[0];
export declare function useAuthenticator(selector?: UseAuthenticatorSelector): UseAuthenticator;
