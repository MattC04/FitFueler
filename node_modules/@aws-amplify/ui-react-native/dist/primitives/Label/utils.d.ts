import { ViewStyle } from 'react-native';
import { LabelPosition } from './types';
/**
 * The `flexDirection` value returned from `getFlexDirectionFromLabelPosition`
 * assumes a `Label` component follows the `Primary` component it labels inside
 * the `Container` that the `flexDirection` is applied to.
 *
 * Example Usage:
 * ```jsx
 *   const flexDirection = getFlexDirectionFromLabelPosition(labelPosition);
 *   <Container style={{ flexDirection }}>
 *     <Primary />
 *     <Label />
 *   </Container>
 * ```
 */
export declare const getFlexDirectionFromLabelPosition: (position: LabelPosition) => ViewStyle['flexDirection'];
