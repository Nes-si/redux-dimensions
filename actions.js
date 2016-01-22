/*
 * action types
 */
export const CALC = 'CALC';

/*
 * action creators
 */
export function calc(dim) {
    return {
        type: CALC,
        dim
    };
}
