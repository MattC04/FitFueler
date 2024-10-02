/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultConfirmSignUpProps } from '../types';
declare const ConfirmSignUp: {
    ({ codeDeliveryDetails, fields, handleBlur, handleChange, handleSubmit, isPending, resendCode, validationErrors, ...rest }: DefaultConfirmSignUpProps): JSX.Element;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Footer: typeof DefaultFooter;
    Header: typeof DefaultHeader;
    displayName: string;
};
export default ConfirmSignUp;
