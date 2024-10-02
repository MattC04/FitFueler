/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultSignInProps } from '../types';
declare const SignIn: {
    ({ fields, handleBlur, handleChange, handleSubmit, hideSignUp, socialProviders, toFederatedSignIn, toForgotPassword, toSignUp, validationErrors, ...rest }: DefaultSignInProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default SignIn;
