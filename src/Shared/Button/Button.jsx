/* eslint-disable react/prop-types */

export default function Button({children}) {
    return (
        <div>
            <button className='btn bg-transparent border-0 text-white hover:bg-transparent border-b-4'>{children}</button>
        </div>
    )
}
