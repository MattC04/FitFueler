/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultForceNewPasswordProps } from '../types';
declare const ForceNewPassword: {
    ({ fields, handleBlur, handleChange, handleSubmit, hasValidationErrors, isPending, toSignIn, validationErrors, ...rest }: DefaultForceNewPasswordProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default ForceNewPassword;
