import { mount } from '@vue/test-utils'
import Header from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Header.vue', () => {
  test('render test', () => {
    const wrapper = mount(Header, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
