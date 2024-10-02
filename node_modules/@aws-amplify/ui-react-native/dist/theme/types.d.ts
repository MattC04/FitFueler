import { ReactNativeTokens } from '@aws-amplify/ui';
import { ButtonStyles, CheckboxStyles, DividerStyles, ErrorMessageStyles, HeadingStyles, IconStyles, IconButtonStyles, LabelStyles, PasswordFieldStyles, PhoneNumberFieldStyles, RadioStyles, RadioGroupStyles, TabsStyles, TextFieldStyles } from '../primitives';
type ComponentTheme<ComponentType, Output> = Output extends 'output' ? ComponentType : ((tokens: StrictTheme['tokens']) => ComponentType) | ComponentType;
export type Components<Output extends 'input' | 'output' | unknown = unknown> = {
    button?: ComponentTheme<ButtonStyles, Output>;
    checkbox?: ComponentTheme<CheckboxStyles, Output>;
    divider?: ComponentTheme<DividerStyles, Output>;
    errorMessage?: ComponentTheme<ErrorMessageStyles, Output>;
    heading?: ComponentTheme<HeadingStyles, Output>;
    icon?: ComponentTheme<IconStyles, Output>;
    iconButton?: ComponentTheme<IconButtonStyles, Output>;
    label?: ComponentTheme<LabelStyles, Output>;
    passwordField?: ComponentTheme<PasswordFieldStyles, Output>;
    phoneNumberField?: ComponentTheme<PhoneNumberFieldStyles, Output>;
    radio?: ComponentTheme<RadioStyles, Output>;
    radioGroup?: ComponentTheme<RadioGroupStyles, Output>;
    tabs?: ComponentTheme<TabsStyles, Output>;
    textField?: ComponentTheme<TextFieldStyles, Output>;
};
export type ColorMode = 'light' | 'dark' | 'system' | null;
export type Override = Omit<Theme, 'overrides'> & {
    colorMode?: ColorMode;
};
export type StrictTokens = ReactNativeTokens<'required'>;
export type Tokens = ReactNativeTokens<'optional'>;
type OmittedComponents = 'checkbox' | 'divider' | 'tabs';
/**
 * A custom Theme with all properties optional.
 */
export interface Theme {
    /**
     * Custom component styles
     */
    components?: Omit<Components<'input'>, OmittedComponents>;
    /**
     * Component and component agnostic tokens.
     */
    tokens?: Tokens;
    /**
     * Overrides allows switching between design tokens in different contexts,
     * like light and dark mode.
     */
    overrides?: Override[];
    spaceModifier?: number;
}
export interface DefaultTheme {
    tokens: ReactNativeTokens<'default'>;
}
/**
 * Fully built theme that has styling based
 * on the design tokens and all design tokens have added fields
 * to be used in Javascript/Typescript.
 *
 * `components` remains an optional property, it is only populated
 * via custom themes.
 */
export interface StrictTheme {
    tokens: StrictTokens;
    components?: Components<'output'>;
    overrides?: Override[];
    spaceModifier?: number;
}
export {};
