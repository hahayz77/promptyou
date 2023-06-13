"use client"
import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useEffect, useState } from "react"

const Nav = () => {

    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }

        setUpProviders()
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href={"/"} className="flex gap-2 flex-center">
                <Image src={"/images/logo.svg"} width={30} height={30} className="object-contain" alt="logo" />
                <p className="logo_text">PromptYo</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href={"/create-prompt"} className="black_btn orange_btn">
                            Create Prompt
                        </Link>
                        <button type="button" onClick={signOut} className="outline_btn">
                            Sign Out
                        </button>
                        <Link href={"/profile"}>
                            <Image src={session?.user.image} width={37} height={37} className="rounded-full hover:scale-105 duration-300" alt="profile" ></Image>
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn orange_btn">
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" onClick={() => setToggleDropdown((prev) => !prev)}></Image>
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href={"/profile"} className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                                    My profile
                                </Link>
                                <Link href={"/create-prompt"} className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                                    Create Prompt
                                </Link>
                                <button type='button' onClick={() => { setToggleDropdown(false); signOut(); }} className='mt-5 w-full black_btn'>
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button type='button' key={provider.name} onClick={() => { signIn(provider.id) }} className='black_btn orange_btn' >
                                    Sign in
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav