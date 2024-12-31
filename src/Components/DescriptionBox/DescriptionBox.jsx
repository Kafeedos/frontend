import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="decriptionbox-navigator">
            <div className="decriptionbox-nav-box">Description</div>
            <div className="decriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An awesomme product that has a lot of blah blah balah ablah 
                you can look more about this in the middle of the night,                
            </p>
            <p>
            goat meat is the best type of meat in my opinion
            this is actually just a static text that's for description.
            </p>
        </div>
    </div>
  )
}
