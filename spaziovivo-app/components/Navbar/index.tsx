"use client"

import { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import Container from "@/containers/home-page/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FullMenu from "../FullMenu";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps>= ({}) => {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => {
        console.log("Before set: " + isOpen)
        setOpen(!isOpen)
        console.log("After set: " + isOpen)
    };

    return(
        <>
        <header
            className={`
                z-20 ${
                    pathname! == "/"
                    ? "relative border-b-2 border-light"
                    : "absolute left-0 right-0 top-8"
                }
                `}
        >
            <Container classes="px-7">
            <div className="flex items-center justify-between">
                        <div className="flex-none">
                            <Link href="/">
                                    <h1 className="font-charm text-primary text-4xl font-bold">
                                        FT
                                    </h1>
                            </Link>
                        </div>
                        <div className="flex-none hidden md:block">
                            <nav>
                                <ul className="flex justify-items-end items-center">
                                    <li className="mx-4 relative">
                                        <Link href="/" className="text-white text-base custom__hover--nav block py-6">
                                                Home
                                        </Link>
                                    </li>
                                    <li className="mx-4 relative">
                                        <Link href="/listings" className="text-white text-base custom__hover--nav block py-6">
                                                Lista de propiedades
                                        </Link>
                                    </li>
                                    <li className="mx-4">
                                        <Hamburger
                                            toggled={isOpen}
                                            toggle={handleToggle}
                                            color="#fff"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex-none md:hidden py-5">
                            <Hamburger
                                toggled={isOpen}
                                toggle={handleToggle}
                                color="#fff"
                            />
                        </div>
                    </div>
            </Container>
        </header>
        {isOpen?  <FullMenu handleClose={handleToggle} /> : null}
        </>
    )
}

export default Navbar;
