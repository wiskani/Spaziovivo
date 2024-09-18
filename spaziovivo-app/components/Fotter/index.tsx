import Container from "@/containers/home-page/container";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="mt-12 bg-black222 border-t-2 border-red-500">
        <Container classes="px-3">
            <div className="flex flex-col md:flex-row py-16">
                <div className="flex-1.5 flex flex-col items-center md:items-start">
                    <Link href="/">
                            <h1 className="font-charm text-primary text-4xl md:text-6xl font-bold">
                               Spaziovivo 
                            </h1>
                    </Link>
                    <p className="mt-2 text-base text-gray-400 md:w-4/5 text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut.
                    </p>

                </div>
                <div className="flex-1.5 my-5 md:my-0">
                    <h5 className="mt-3 text-lg text-center md:text-left mb-3 underline text-white">
                       Provicincias 
                    </h5>
                    <ul className="p-0 m-0 flex flex-col text-center md:text-left">
                        <li className="mt-1 group">
                            <Link href="/listings?country=Italy" className="text-base text-desc group-hover:underline text-white">
                                    Cochabamba
                            </Link>
                        </li>
                        <li className="mt-1 group">
                            <Link href="/listings?country=Spain" className="text-base text-desc group-hover:underline text-white">
                                    Santa Cruz
                            </Link>
                        </li>
                        <li className="mt-1 group">
                            <Link href="/listings?country=United Kingdom" className="text-base text-desc group-hover:underline text-white">
                                    La Paz
                            </Link>
                        </li>
                        <li className="mt-1 group">
                            <Link href="/listings?country=Portugal" className="text-base text-desc group-hover:underline text-white">
                                    Oruro
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
        <div className="flex flex-col md:flex-row bg-black222 justify-center items-center py-3">
            <p className="text-base text-white md:mx-3 mb-2 md:mb-0">
                Made by wiskani 
            </p>
        </div>
    </footer>
    )
}

export default Footer
