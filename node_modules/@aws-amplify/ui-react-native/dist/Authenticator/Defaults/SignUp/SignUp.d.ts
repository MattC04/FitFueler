/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultSignUpProps } from '../types';
declare const SignUp: {
    ({ fields, handleBlur, handleChange, handleSubmit, hasValidationErrors, hideSignIn, isPending, socialProviders, toFederatedSignIn, toSignIn, validationErrors, ...rest }: DefaultSignUpProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default SignUp;
