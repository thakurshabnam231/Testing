
import {render,screen} from '@testing-library/react'
import Async from './Async'
describe('async component',()=>{
    test('renders posts if request succeed',async()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:'first post'}]
        });
        render(<Async/>)
         const listItemsElement= await screen.findAllByRole('listitem')
         expect(listItemsElement)
    })
})