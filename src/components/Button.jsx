import React from 'react'

const Button = (props) => {
    return (
        <button
            type="button"
            className="rounded-md bg-[#00B98E] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2da186] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
            {props.name}
        </button>
    )
}

export default Button