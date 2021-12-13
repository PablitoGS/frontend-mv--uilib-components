/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import ThumbnailPicture from '../src/index'

chai.use(chaiDOM)

describe('ThumbnailPicture', () => {
  const setup = setupEnvironment(ThumbnailPicture)

  it('should display an alt and caption', () => {
    const props = {
      caption: 'Some image',
      alt: 'Image alt'
    }
    const {getByText, getByAltText, getByRole} = setup(props)

    const imageByRole = getByRole('img')
    const imageByAlt = getByAltText('Image alt')

    expect(getByText('Some image')).to.be.visible
    expect(imageByAlt).to.be.visible
    expect(imageByAlt).to.be.visible
    expect(imageByAlt).to.be.equal(imageByRole)
  })
})
