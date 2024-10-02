import { InAppMessageImage, InAppMessageLayout } from '@aws-amplify/ui-react-core-notifications';
import { UseMessageImage } from './types';
/**
 * Handles prefetching and dimension setting for message images
 *
 * @param image contains image source
 * @param layout message layout
 * @returns message image dimensions and rendering related booleans
 */
export default function useMessageImage(image: InAppMessageImage | undefined, layout: InAppMessageLayout): UseMessageImage;
