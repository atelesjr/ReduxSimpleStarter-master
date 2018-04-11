import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Describe  to group together similar tests
describe('App' , () => {
  let component

  beforeEach(()=> {
    component = renderComponent(App)
  })

  it('shows a comment box',() => {
    //chai-jquery find to .css
    expect(component.find('.comment-box')).to.exist
  })
  
});


/* - DELETED IN S2C12
  //Unse it to test a single attribute of a target
  it('shows the correct text', () => {

    //create an instance of App

    const component = renderComponent(App);

    // to make an assertion about a target
    expect(component).to.contain('React simple starter');

    });
*/