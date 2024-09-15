interface FDropdownOfferProps {
    handleClick: (value: string) => any;
}

const FDropdownOffer: React.FC<FDropdownOfferProps> = ({ handleClick }) => {
    return (
        <div className="mb-2">
            <p className="text-base text-gray-500">Oferta</p>

            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("Venta")}
            >
                <h3 className="text-2xl text-black222 font-bold">Venta</h3>
            </div>
            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("Alquiler")}
            >
                <h3 className="text-2xl text-black222 font-bold"></h3>
            </div>
            <div
                className="rounded-sm py-2 hover:bg-gray-100"
                onClick={() => handleClick("Anticretico")}
            >
                <h3 className="text-2xl text-black222 font-bold"></h3>
            </div>
        </div>
    );
};
export default FDropdownOffer;
