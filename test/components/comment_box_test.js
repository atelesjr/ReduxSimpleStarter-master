import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
    let component //undefined

    //to each it, a new instance for each one.
    beforeEach(() => {
        component = renderComponent(CommentBox)
    })

    it('has the correct class',() => {
        //chai-jquery plugin
        expect(component).to.have.class('comment-box')
    })

    it ('has a text area',() => {
        //chai-jquery plugin
        expect(component.find('textarea')).to.exist

    })

    it('has a button', () => {
        expect(component.find('button')).to.exist

    })

    describe('entering some text',()=> {
        beforeEach(() => {
            component.find('textarea')
                .simulate('change', 'new comment')
        })

        it('show that text in the text area',() => {
            expect(component.find('textarea'))
                .to.have.value('new comment')
        })

        it('When submitted, clears the input',() =>{
            component.simulate('submit')
            expect(component.find('textarea')).to.have.value('')
        })

    })
})