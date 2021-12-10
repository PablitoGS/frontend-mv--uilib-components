/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */

import React from 'react'
import {render} from '@testing-library/react'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import ThumbnailList from '../src/index'

chai.use(chaiDOM)

describe('ThumbnailLIst', () => {
  it('should display a list', () => {
    const {getByText} = render(
      <ThumbnailList>
        <ThumbnailList.Item>Item 1</ThumbnailList.Item>
        <ThumbnailList.Item>Item 2</ThumbnailList.Item>
        <ThumbnailList.Item>Item 3</ThumbnailList.Item>
        <ThumbnailList.Item>Item 4</ThumbnailList.Item>
      </ThumbnailList>
    )

    expect(getByText('Item 1')).to.be.visible
    expect(getByText('Item 2')).to.be.visible
    expect(getByText('Item 3')).to.be.visible
    expect(getByText('Item 4')).to.be.visible
  })
})
