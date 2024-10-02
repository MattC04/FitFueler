import { TypedField } from '../types';
import { UseFieldValues, UseFieldValuesParams } from './types';
export default function useFieldValues<FieldType extends TypedField>({ componentName, fields, handleBlur, handleChange, handleSubmit, validationErrors, }: UseFieldValuesParams<FieldType>): UseFieldValues<FieldType>;
