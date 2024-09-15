import { Province, Estates, City } from "@prisma/client";
import Dropdown from "@/components/Dropdown";
import FDropdownLocation from "../FDropdownLocation";
import FDropdownOffer from "../FDropdownOffer";
import FDropdownType from "../FDropdownType";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

interface EstatesWithCityAndProvince extends Estates {
    city: City & { province: Province };
}
interface FiltersHeroProps {
    estates: EstatesWithCityAndProvince[];
    provinces: Province[];
}

const FiltersHero: React.FC<FiltersHeroProps> = ({estates, provinces}) => {
    const router = useRouter();

    const [locationOpen, setLocationOpen] = useState(false);
    const [offerOpen, setOfferOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleSearch = () => {
        const queryValues: { location?: string; offer?: string; type?: string } = {}

        if (selectedLocation) queryValues["location"] = selectedLocation;
        if (selectedOffer) queryValues["offer"] = selectedOffer;
        if (selectedType) queryValues["type"] = selectedType;

        router.push(
            {
                pathname: "/listings",
                query: {...queryValues},
            },
            undefined,
            { shallow: false}
        );
    };
     return (
        <div className="mt-10 flex flex-col md:flex-row">
            {/* First Filter */}
            <div
                className="
                bg-white
                mt-4
                md:mt-0
                md:mr-4
                rounded-2xl
                py-4
                px-10
                md:px-4
                lg:px-10
                flex
                flex-row
                items-center
                justify-center
                cursor-pointer
                relative"
                onClick={() => setLocationOpen(!locationOpen)}
            >
                <div className="flex-none mr-3">
                    <h3 className="
                        text-gray-400
                        text-xl
                        md:text-base
                        lg:text-xl"
                    >
                        Lugares:{" "}
                    </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">
                        {selectedLocation || "Cualquier lugar"}
                    </h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={locationOpen}
                    handleChange={() => setLocationOpen(!locationOpen)}
                    classes="
                    filterDrop
                    bg-white
                    shadow-lg
                    max-h-56
                    overflow-y-auto
                    "
                >
                    <FDropdownLocation
                        locations={estates}
                        provinces={provinces}
                        handleClick={(value) => setSelectedLocation(value)}
                    />
                </Dropdown>
            </div>

            {/* Second Filter */}
            <div
                className="
                bg-white
                mt-4
                md:mt-0
                md:mr-4
                rounded-2xl
                py-4
                px-10
                md:px-4
                lg:px-10
                flex
                flex-row
                items-center
                justify-center
                cursor-pointer
                relative"
                onClick={() => setTypeOpen(!typeOpen)}
            >
                <div className="flex-none mr-3">
                    <h3 className="
                        text-gray-400
                        text-xl
                        md:text-base
                        lg:text-xl"
                    >
                        Tipo:{" "}
                    </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">
                        {selectedType || "Todos los tipos"}
                    </h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={typeOpen}
                    handleChange={() => setTypeOpen(!typeOpen)}
                    classes="filterDrop bg-white shadow-lg"
                >
                    <FDropdownType
                        handleClick={(value) => setSelectedType(value)}
                    />
                </Dropdown>
            </div>

            {/* Third Filter */}
            <div
                className="
                bg-white
                mt-4
                md:mt-0
                md:mr-4
                rounded-2xl
                py-4
                px-10
                md:px-4
                lg:px-10
                flex
                flex-row
                items-center
                justify-center
                cursor-pointer
                relative"
                onClick={() => setOfferOpen(!offerOpen)}
            >
                <div className="flex-none mr-3">
                    <h3 className="text-gray-400 text-xl md:text-base lg:text-xl">
                        Oferta:{" "}
                    </h3>
                </div>
                <div className="flex-none flex items-center">
                    <h4 className="text-lg text-black">
                        {selectedOffer || "Todas las ofertas"}
                    </h4>
                    <MdExpandMore color="#BABABA" className="ml-2" />
                </div>

                <Dropdown
                    isOpen={offerOpen}
                    handleChange={() => setOfferOpen(!offerOpen)}
                    classes="filterDrop bg-white shadow-lg"
                >
                    <FDropdownOffer
                        handleClick={(value) => setSelectedOffer(value)}
                    />
                </Dropdown>
            </div>

            {/* Search */}
            <div
                className="
                bg-primary
                mt-4
                md:mt-0
                md:mr-4
                rounded-2xl
                py-4
                px-10
                md:px-4
                lg:px-10
                flex
                flex-row
                items-center
                justify-center
                cursor-pointer
                hover:bg-primaryHover"
                onClick={handleSearch}
            >
                <p className="
                    text-xl
                    md:text-base
                    lg:text-xl
                    text-white
                    font-bold"
                >
                    Buscar
                </p>
            </div>
        </div>
    );
}

export default FiltersHero;
