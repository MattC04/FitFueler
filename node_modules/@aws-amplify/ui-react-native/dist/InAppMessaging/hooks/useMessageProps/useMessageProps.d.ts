import { MessageComponentBaseProps } from '@aws-amplify/ui-react-core-notifications';
import { GetDefaultStyle, MessageOverrideStyle, UseMessageProps } from './types';
/**
 * Handle common message UI component prop logic including setting of image dimensions,
 * render booleans, and style resolving
 *
 * @param {MessageComponentBaseProps} props - message UI component props
 * @param {GetDefaultStyle} getDefaultStyle - returns default UI component style
 *
 * @returns {UseMessageProps} message UI component render related booleans and styles
 */
export default function useMessageProps(props: MessageComponentBaseProps<MessageOverrideStyle>, getDefaultStyle: GetDefaultStyle): UseMessageProps;
