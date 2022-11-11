import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act } from 'react-dom/test-utils';

import PageTitle from  './pages/Blaze';

let container = null;
beforeEach(() =>{
    container=document.createElement('div');
    document.body.appendChild(container);
})

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})

it("Render test",() =>{

act(() =>{
   render(<PageTitle/>, container);
});
expect(container.textContent).toBe("Blaze EverhearthBlaze Everhearth is a Fire Genasi blood hunter. There are many words that could be used to describe Blaze: Charismatic, cocky, occassionally hot-headed(pun not intended), but the thing that is most important is their willingness to fight to defend those who need it.Blaze had been taught from a young age how to defend herself in combat and to protect those who need it most.Their family holds knowledge of a secret blood-curdling ritual passed down through generations, enabling all whoimbibe it access to powerful techniques that increase their abilities at the cost of their own vitality.Class:Blood HunterSubclassOrder of the MutantLevel:7HP:70AC:17 Blaze's Song:");
})
