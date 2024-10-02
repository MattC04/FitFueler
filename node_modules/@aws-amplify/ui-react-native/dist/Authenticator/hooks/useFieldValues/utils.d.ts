import { ValidationError } from '@aws-amplify/ui';
import { AuthenticatorLegacyField, AuthenticatorRouteComponentName, UseAuthenticator } from '@aws-amplify/ui-react-core';
import { RadioFieldOptions, TextFieldOptionsType, TypedField } from '../types';
export declare const isRadioFieldOptions: (field: TypedField) => field is RadioFieldOptions;
export declare const getSanitizedRadioFields: (fields: TypedField[], componentName: AuthenticatorRouteComponentName) => TypedField[];
export declare const getSanitizedTextFields: (fields: TypedField[], componentName: AuthenticatorRouteComponentName) => TypedField[];
/**
 * Translate machine fields to typed fields
 *
 * @param {AuthenticatorLegacyField} field machine field option object
 * @returns {TypedField} UI field props object
 */
export declare const getTypedField: ({ type: machineFieldType, name, ...field }: AuthenticatorLegacyField) => TypedField;
/**
 * @param {AuthenticatorLegacyField[]} fields machine field options array
 * @returns {TypedField[]} UI field props array
 */
export declare const getTypedFields: (fields: AuthenticatorLegacyField[]) => TypedField[];
export declare function getRouteTypedFields({ fields, route, }: Pick<UseAuthenticator, 'fields' | 'route'>): TypedField[];
/**
 *
 * @param {TextFieldOptionsType} field text field type
 * @param {string | undefined} value text field value
 * @param {string[]} stateValidations validation errors array from state machine
 * @returns {string[]} field errors array
 */
export declare const runFieldValidation: (field: TextFieldOptionsType, value: string | undefined, stateValidations: ValidationError | undefined) => string[];
