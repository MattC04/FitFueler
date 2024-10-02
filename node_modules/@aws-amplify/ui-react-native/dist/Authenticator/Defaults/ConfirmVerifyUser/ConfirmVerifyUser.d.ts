/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultConfirmVerifyUserProps } from '../types';
declare const ConfirmVerifyUser: {
    ({ fields, handleBlur, handleChange, handleSubmit, isPending, skipVerification, validationErrors, ...rest }: DefaultConfirmVerifyUserProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default ConfirmVerifyUser;
