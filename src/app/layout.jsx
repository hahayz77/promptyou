import '@/styles/global.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'


export const metadata = {
    title: "Prompty",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="pt">
            <body>
                <Provider>
                    <div className='main'>
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                        {/* {modal} */}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout