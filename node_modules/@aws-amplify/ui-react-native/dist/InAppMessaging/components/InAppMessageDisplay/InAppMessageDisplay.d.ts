/// <reference types="react" />
import { InAppMessageDisplayProps } from './types';
declare function InAppMessageDisplay({ components: overrideComponents, }: InAppMessageDisplayProps): JSX.Element | null;
declare namespace InAppMessageDisplay {
    var BannerMessage: typeof import("../BannerMessage").BannerMessage;
    var CarouselMessage: typeof import("../CarouselMessage").CarouselMessage;
    var FullScreenMessage: typeof import("../FullScreenMessage").FullScreenMessage;
    var ModalMessage: typeof import("../ModalMessage").ModalMessage;
}
export default InAppMessageDisplay;
