/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultConfirmResetPasswordProps } from '../types';
declare const ConfirmResetPassword: {
    ({ fields, handleBlur, handleChange, handleSubmit, hasValidationErrors, isPending, resendCode, validationErrors, ...rest }: DefaultConfirmResetPasswordProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default ConfirmResetPassword;
