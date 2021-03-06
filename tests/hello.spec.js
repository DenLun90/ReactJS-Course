// vendors
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
// project
import Hello from '../app/hello';
// chai
import {expect} from 'chai'


describe('Hello', () => {
  const hello = TestUtils.renderIntoDocument(<Hello/>);
  
  it('renders without problems', function () {
    expect(hello).to.exist;
  });

  it('renders an h1 element', () => {
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      hello, 'h1'
    );

    expect(h1.textContent).to.equal('Hello darkness my old friend.');

  });
});

