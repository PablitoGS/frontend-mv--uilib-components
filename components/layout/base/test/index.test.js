/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import {render} from '@testing-library/react'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import LayoutBase from '../src/index'

chai.use(chaiDOM)

describe('LayoutBase', () => {
  it('should display a layout', () => {
    const {getByText} = render(
      <LayoutBase>
        <div>Children</div>
      </LayoutBase>
    )

    expect(getByText('Children')).to.be.visible
  })
})
