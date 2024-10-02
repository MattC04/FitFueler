/// <reference types="react" />
import { DefaultFooter, DefaultHeader } from '../../common';
import { DefaultVerifyUserProps } from '../types';
declare const VerifyUser: {
    ({ fields, handleBlur, handleChange, handleSubmit, skipVerification, validationErrors, ...rest }: DefaultVerifyUserProps): JSX.Element;
    Footer: typeof DefaultFooter;
    FormFields: {
        ({ fields, fieldContainerStyle, fieldLabelStyle, isPending, style, }: import("../../common/DefaultFormFields/types").DefaultRadioFormFieldsProps): JSX.Element;
        displayName: string;
    };
    Header: typeof DefaultHeader;
    displayName: string;
};
export default VerifyUser;
