import Image from "next/image"

function Header() {
    return (
        <header className="sticky top-1 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left - logo */}
            <div className="relative flex items-center h-15 cursor-pointer my-auto">
                <Image
                    src="https://e7.pngegg.com/pngimages/398/500/png-clipart-airbnb-logo-airbnb-logo-icons-logos-emojis-tech-companies-thumbnail.png"
                    alt="test"
                    width={200}
                    height={400}
                />
            </div>
            {/* middle - search */}
            <div>
                <label className="relative block">
                    <span className="absolute inset-y-0 right-1 flex items-center pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
            </div>
            {/* right */}
            <div>

            </div>
        </header>
    )
}

export default Header