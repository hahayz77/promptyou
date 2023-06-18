"use client"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"
import theme from "@/utils/theme"
import { AppStateProvider } from "@/context/AppStateProvider"

const Provider = ({ children, session }) => {
    return (
        <AppStateProvider>
            <SessionProvider session={session}>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        {children}
                    </ChakraProvider>
                </CacheProvider>
            </SessionProvider>
        </AppStateProvider>
    )
}

export default Provider