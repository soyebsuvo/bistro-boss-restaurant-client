/* eslint-disable react/prop-types */

import { Parallax } from "react-parallax";

export default function Cover({ img, height, title }) {
    return (
        <Parallax 
        blur={1} 
        bgImage={img} 
        bgImageAlt="the cat" 
        strength={200}
        >
            <div className={`hero ${height}`}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-[rgba(0,0,0,0.4)] px-56 py-16">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>

    )
}
