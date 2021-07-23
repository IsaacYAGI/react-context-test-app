import { createContext, useState } from 'react'

const UserContext = createContext()
const { Provider, Consumer } = UserContext

const UserProvider = ({children}) => {
    const [Name, setName] = useState("Uknown");

    return (
        <Provider
            value={{
                Name: Name, setName: setName
            }}
        >
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext }