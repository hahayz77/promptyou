"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"

const Provider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            <CacheProvider>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </SessionProvider>
    )
}

export default Provider