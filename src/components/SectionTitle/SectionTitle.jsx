
// eslint-disable-next-line react/prop-types
export default function SectionTitle({ subHeading, heading }) {
    return (
        <div className="w-5/12 text-center mx-auto">
            <p className="font-bold font-inter text-[#D99904] italic mb-2 text-sm">--- {subHeading} ---</p>
            <h2 className="text-3xl font-bold font-inter border-y-4 py-3 mb-12">{heading}</h2>
        </div>
    )
}
