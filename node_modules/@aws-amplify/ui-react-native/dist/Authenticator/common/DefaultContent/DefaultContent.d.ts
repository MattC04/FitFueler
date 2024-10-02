/// <reference types="react" />
import { TextFieldOptionsType, RadioFieldOptions } from '../../hooks';
import { DefaultContentProps } from './types';
export default function DefaultContent<FieldsType extends TextFieldOptionsType | RadioFieldOptions>({ body, buttons: { primary, links, secondary }, error, fields, Footer, FormFields, isPending, Header, headerText, validationErrors, }: DefaultContentProps<FieldsType>): JSX.Element;
