import jsdom from 'jsdom'
import _$ from 'jquery'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'

/* --- Set up testing enviroment to run like a browser in the command line
-JSDOM - simulates the DOM in terminal in test enviroment.
-global.document is window.dcument (on browser) for node */
global.document = jsdom.jsdom('<!DOCTYPE HTML><html><body></body></html>')
global.window = global.document.defaultView
global.navigator = global.window.navigator;
const $ = _$(global.window)

/* --- Set up chai-jQyery */
chaiJquery(chai, chai.util, $);

/*Build 'render component' helper that should render a given react class */
function renderComponent(ComponentClass, props = {}, state = {}){
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)} >
      <ComponentClass {...props} />
    </Provider>
  )

  //produces HTML
  return $(ReactDOM.findDOMNode(componentInstance)) 
}


/*/Build helper for simulating events */
//build helperfor simulating events
$.fn.simulate = function(eventName, value){
  if (value){
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

export { renderComponent, expect }