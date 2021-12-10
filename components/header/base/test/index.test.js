/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import {render} from '@testing-library/react'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import HeaderBase from '../src/index'

chai.use(chaiDOM)

describe('HeaderBase', () => {
  it('should display header', () => {
    const {getByText} = render(
      <HeaderBase>
        <header>Heading</header>
      </HeaderBase>
    )

    expect(getByText('Heading')).to.be.visible
  })
})
