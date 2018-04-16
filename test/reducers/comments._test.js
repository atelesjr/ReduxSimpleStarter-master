import { expect } from '../test_helper'
import commmentReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
    it('handles action with unkown type', () => {
        expect(commmentReducer(undefined, {} )).to.eql([])
    })

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' }
        expect(commmentReducer([], action))
    })
})