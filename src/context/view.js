import React, { useState } from 'react'

export const ViewContext = React.createContext();

const ViewContextProvider = ({children}) => {
    const [cardView, setCardView] = useState(false)
    return (<ViewContext.Provider value={{cardView, setCardView}}>
        {children}
    </ViewContext.Provider>

    )
}
export default ViewContextProvider
