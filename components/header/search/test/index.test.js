/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'
import {fireEvent} from '@testing-library/react'
import sinon from 'sinon'

import chai from 'chai'
import chaiDOM from 'chai-dom'
import SearchComponent from '../src/index'

chai.use(chaiDOM)

describe('HeaderSearch', () => {
  const setup = setupEnvironment(SearchComponent)

  it('when click on search should search', () => {
    // Given

    const spy = sinon.spy()

    const props = {
      textButton: 'Submit',
      handleClick: spy
    }

    // When
    const {getByText} = setup(props)

    const button = getByText('Submit')
    fireEvent.click(button)

    // Then
    sinon.assert.calledOnce(spy)
  })
})
