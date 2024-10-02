/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultSetupTotpProps } from '../types';
declare const SetupTotp: {
    ({ fields, handleBlur, handleChange, handleSubmit, isPending, toSignIn, totpSecretCode, validationErrors, ...rest }: DefaultSetupTotpProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fieldContainerStyle, fieldErrorsContainer, fieldErrorStyle, fieldStyle, fields, isPending, style, validationErrors, }: import("../../common/DefaultFormFields/types").DefaultTextFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default SetupTotp;
