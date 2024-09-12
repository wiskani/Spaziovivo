import { Province, Estates, City } from ".prisma/client";
import { useRouter } from "next/router";

interface EstatesWithCityAndProvince extends Estates {
    city: City & { province: Province };
}

interface FDropdownLocationProps {
    locations: EstatesWithCityAndProvince[]
    provinces: Province[];
    handleClick: (value: string) => void;
}

const FDropdownLocation: React.FC<FDropdownLocationProps> = ({
    locations,
    handleClick,
    provinces,
}) => {
    const router = useRouter();

    return (
        <>
            {provinces.map((province, idx1) => (
                <div key={idx1} className="mb-2">
                    <p
                        className="text-base text-gray-500 hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                            router.push(
                                {
                                    pathname: "/listings",
                                    query: {
                                        ...router.query,
                                        province: province.province_name,
                                    },
                                },
                                undefined
                            )
                        }
                    >
                        {province.province_name}
                    </p>

                    {locations
                        .filter(
                            (loc) =>
                                loc.city.province.province_name ===
                                province.province_name
                        )
                        .map((city, idx: number) => (
                            <div
                                key={idx}
                                className="rounded-sm py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleClick(city.city.city_name)}
                            >
                                <h3 className="text-2xl text-black222 font-bold">
                                    {city.city.city_name}
                                </h3>
                            </div>
                        ))}
                </div>
            ))}
        </>
    );
};
export default FDropdownLocation;
