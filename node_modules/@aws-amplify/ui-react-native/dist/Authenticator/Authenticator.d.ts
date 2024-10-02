/// <reference types="react" />
import { DefaultContainer } from './common';
import { AuthenticatorProps } from './types';
declare function Authenticator({ children, components: overrides, Container, Footer, Header, ...options }: AuthenticatorProps): JSX.Element | null;
declare namespace Authenticator {
    var Container: typeof DefaultContainer;
    var Provider: typeof import("@aws-amplify/ui-react-core").AuthenticatorProvider;
    var ConfirmResetPassword: {
        ({ fields, handleBlur, handleChange, handleSubmit, hasValidationErrors, isPending, resendCode, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            resendCode: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").ConfirmResetPasswordStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var ConfirmSignIn: {
        ({ challengeName, fields, handleBlur, handleChange, handleSubmit, isPending, toSignIn, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            challengeName: import("@aws-amplify/ui").ChallengeName | undefined;
            toSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").ConfirmSignInStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var ConfirmSignUp: {
        ({ codeDeliveryDetails, fields, handleBlur, handleChange, handleSubmit, isPending, resendCode, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            codeDeliveryDetails: import("@aws-amplify/ui").V5CodeDeliveryDetails;
            resendCode: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").ConfirmSignUpStyle | undefined;
        }): JSX.Element;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Footer: typeof import("./common").DefaultFooter;
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var ConfirmVerifyUser: {
        ({ fields, handleBlur, handleChange, handleSubmit, isPending, skipVerification, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            skipVerification: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").ConfirmVerifyUserStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var ForceNewPassword: {
        ({ fields, handleBlur, handleChange, handleSubmit, hasValidationErrors, isPending, toSignIn, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            toSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").ForceNewPasswordStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var ForgotPassword: {
        ({ fields, handleBlur, handleChange, handleSubmit, isPending, toSignIn, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            toSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").ForgotPasswordStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var SetupTotp: {
        ({ fields, handleBlur, handleChange, handleSubmit, isPending, toSignIn, totpSecretCode, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            toSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
            totpSecretCode: string | null;
            username: string;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").SetupTotpStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var SignIn: {
        ({ fields, handleBlur, handleChange, handleSubmit, hideSignUp, socialProviders, toFederatedSignIn, toForgotPassword, toSignUp, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            hideSignUp?: boolean | undefined;
            socialProviders?: import("@aws-amplify/ui").SocialProvider[] | undefined;
            toFederatedSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
            toForgotPassword: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
            toSignUp: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").SignInStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var SignUp: {
        ({ fields, handleBlur, handleChange, handleSubmit, hasValidationErrors, hideSignIn, isPending, socialProviders, toFederatedSignIn, toSignIn, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").TextFieldOptionsType> & {
            hideSignIn?: boolean | undefined;
            socialProviders?: import("@aws-amplify/ui").SocialProvider[] | undefined;
            toFederatedSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
            toSignIn: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").TextFieldOptionsType[];
        } & {
            style?: import("./Defaults/types").SignUpStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("./common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
    var VerifyUser: {
        ({ fields, handleBlur, handleChange, handleSubmit, skipVerification, validationErrors, ...rest }: import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ComponentSlots<import("./hooks").RadioFieldOptions> & {
            skipVerification: (data?: import("@aws-amplify/ui").AuthEventData | undefined) => void;
        } & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").CommonRouteProps & import("@aws-amplify/ui-react-core/dist/types/Authenticator/hooks").ValidationProps & {
            fields: import("./hooks").RadioFieldOptions[];
        } & {
            style?: import("./Defaults/types").VerifyUserStyle | undefined;
        }): JSX.Element;
        Footer: typeof import("./common").DefaultFooter;
        FormFields: {
            ({ fields, fieldContainerStyle, fieldLabelStyle, isPending, style, }: import("./common/DefaultFormFields/types").DefaultRadioFormFieldsProps): JSX.Element;
            displayName: string;
        };
        Header: typeof import("./common").DefaultHeader;
        displayName: string;
    };
}
export default Authenticator;
