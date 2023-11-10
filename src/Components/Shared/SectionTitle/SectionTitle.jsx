
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center px-3 max-w-sm mx-auto my-10 space-y-2">
            <h1 className="text-[#D99904] text-xl">{subHeading}</h1>
            <h1 className="text-2xl md:text-4xl border-y-2 py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;