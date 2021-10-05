import React from 'react'
import image from '../assets/roseHeadShot.png'

//Create context 
const RoseContext = React.createContext()

//Create the wrapper that will give our app access to context
function UserProvider({children}){
    console.log(RoseContext)

    const currentUser = {
        username:"Rose",
        img: image,
        mood:"happy"
    }
    return <RoseContext.Provider value={currentUser}>{children}</RoseContext.Provider>
}

export {RoseContext, UserProvider}

