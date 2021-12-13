/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import CardMovie from '../src/index'

chai.use(chaiDOM)

describe('CardMovie', () => {
  const setup = setupEnvironment(CardMovie)

  it('should display a Card', () => {
    const props = {
      alt: 'alt image',
      title: 'title',
      subtitle: 'subtitle',
      description: 'description'
    }
    const {getByText, getByAltText, getByRole} = setup(props)

    const imageByRole = getByRole('img')
    const imageByAlt = getByAltText('alt image')

    expect(getByText('title')).to.be.visible
    expect(getByText('subtitle')).to.be.visible
    expect(getByText('description')).to.be.visible
    expect(imageByAlt).to.be.visible
    expect(imageByAlt).to.be.equal(imageByRole)
  })
})
