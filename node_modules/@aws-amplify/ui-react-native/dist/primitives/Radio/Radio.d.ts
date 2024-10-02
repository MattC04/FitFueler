/// <reference types="react" />
import { RadioProps } from './types';
export declare const CONTAINER_TEST_ID = "amplify__radio-button__container";
export declare const DOT_TEST_ID = "amplify__radio-button__dot";
export default function Radio<T>({ accessibilityRole, disabled, label, labelPosition, labelStyle, onChange, onPress, radioContainerStyle, radioDotStyle, selected, size, style, value, ...rest }: RadioProps<T>): JSX.Element;
