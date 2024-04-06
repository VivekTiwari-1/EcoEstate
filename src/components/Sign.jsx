import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Sign(props) {
    let { status } = props

    let element1 = <div> Don&apos;t have an account ? {' '}
        <Link to="/signup" className="font-semibold text-black transition-all duration-200 hover:underline">
            Create a free account
        </Link>
    </div>

    let element2 = <div>
        Already have an account?{' '}
        <Link to="/signin" className="font-semibold text-black transition-all duration-200 hover:underline">
            Sign In
        </Link>
    </div>

    return (
        <section>
            <div className="h-[100vh] grid grid-cols-1 lg:grid-cols-2" >
                <div className='bg-black md:flex hidden' style={{ background: 'linear-gradient(to right, black, transparent)' }}>
                    <div className="relative h-[92vh] w-full md:flex items-end px-4 pb-10 pt-60 hidden md:justify-center m-7">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full rounded-md object-cover object-top"
                                src="https://images.unsplash.com/photo-1711972978079-ca525a47dea4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=".."
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="relative w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24 mb-28">
                            <h3 className="text-5xl text-center leading-[60px] font-bold text-white ">
                                {status} <br /> to your Dream World
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div >
                        <Link to="/">
                            <svg className='ml-[90%] mt-8 cursor-pointer' width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><path fill="#2B3B47" d="M330.443 256l136.765-136.765c14.058-14.058 14.058-36.85 0-50.908l-23.535-23.535c-14.058-14.058-36.85-14.058-50.908 0L256 181.557L119.235 44.792c-14.058-14.058-36.85-14.058-50.908 0L44.792 68.327c-14.058 14.058-14.058 36.85 0 50.908L181.557 256L44.792 392.765c-14.058 14.058-14.058 36.85 0 50.908l23.535 23.535c14.058 14.058 36.85 14.058 50.908 0L256 330.443l136.765 136.765c14.058 14.058 36.85 14.058 50.908 0l23.535-23.535c14.058-14.058 14.058-36.85 0-50.908L330.443 256z"></path></svg>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">{status}</h2>

                            <p className="mt-2 text-sm text-gray-600">
                                {status === "Sign In" ? element1 : element2}
                            </p>
                            <form action="#" method="POST" className="mt-8">
                                <div className="space-y-5">

                                    {status === "Sign Up" &&
                                        <div>
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Full Name{' '}
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    id="name"
                                                ></input>
                                            </div>
                                        </div>

                                    }
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Password{' '}
                                            </label>
                                            {status === "Sign In" &&
                                                <a
                                                    href="#"
                                                    title=""
                                                    className="text-sm font-semibold text-black hover:underline"
                                                >
                                                    {' '}
                                                    Forgot password?{' '}
                                                </a>
                                            }
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Password"
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            {status === "Sign In" &&
                                                "Get started"
                                            }
                                            {status === "Sign Up" &&
                                                "Create Account"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    {status} with Google
                                </button>
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-[#2563EB]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </span>
                                    {status} with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}