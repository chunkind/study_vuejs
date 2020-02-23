import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', ()=>{
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: {msg}
        })
        //expect(wrapper.test()).to.include(msg)
        expect(wrapper.find('div.hello h1').text()).to.equal(msg)
    })
})