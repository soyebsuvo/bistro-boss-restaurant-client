import pic from '../../../assets/home/chef-service.jpg'
export default function SubBannerSection() {
    return (
        <div className="md:px-20">
            <div className="hero md:py-20 md:px-20" style={{ backgroundImage: `url(${pic})` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="text-center bg-white p-12 px-32">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-cinzel text-[#151515]">Bistro Boss</h1>
                        <p className="mb-5 text-center font-inter text-[#151515]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
