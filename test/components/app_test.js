import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Describe  to group together similar tests
describe('App' , () => {
  let component

  beforeEach(()=> {
    //create an instance of App
    component = renderComponent(App)
  })

  // to make an assertion about a target
  it('shows a comment box',() => {
    //chai-jquery find to .css
    expect(component.find('.comment-box')).to.exist
  })
  
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist
  })
  
});