import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/Color-picker.vue'

describe('ColorPicker.vue', () => {
  it('should mount', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ColorPicker)
    const div = wrapper.find('.c-color-picker')
    expect(div.exists()).toBe(true)
  })
})
