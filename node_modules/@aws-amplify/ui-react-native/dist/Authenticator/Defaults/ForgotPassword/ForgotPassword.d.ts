/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultForgotPasswordProps } from '../types';
declare const ForgotPassword: {
    ({ fields, handleBlur, handleChange, handleSubmit, isPending, toSignIn, validationErrors, ...rest }: DefaultForgotPasswordProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default ForgotPassword;
