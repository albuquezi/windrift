import 'jsdom-global/register'
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
import { List, Map, ManyMap, Link, RenderSection, NextChapter, FromInventory, AllButSelection } from '../index'


describe('index.js', () => {
  let store
  let options
  beforeEach(() => {
    store = {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({
        expansions: { present: {} },
        counter: { present: 0 },
        inventory: { present: {} },
        config: { identifier: 'test' },
      }),
    }
    options = {
      context: {
        store,
      },
      childContextTypes: {
        store: PropTypes.object.isRequired,
      },
    }
  })

  it('allows importing of all the components', () => {
    mount(<List expansions={['a']} tag="test" />, options)
    mount(<Map from="a" to={{ a: 'b' }} />, options)
    mount(<ManyMap from={['a']} to={{ a: 'b' }} />, options)
    mount(<Link text="hello" />, options)
    mount(<RenderSection currentSection={0} sections={[<div key={1} />]} />, options)
    mount(<NextChapter chapter={0} />, options)
    mount(<FromInventory inventory="foo bar" />, options)
    mount(<AllButSelection selection="foo" expansions={['foo', 'bar']} />, options)
  })
})
