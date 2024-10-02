const FLEX_DIRECTIONS = {
    start: 'row-reverse',
    end: 'row',
    top: 'column-reverse',
    bottom: 'column',
};
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
export const getFlexDirectionFromLabelPosition = (position) => FLEX_DIRECTIONS[position];
