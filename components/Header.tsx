import Image from "next/image"

function Header() {
    return (
        <header>
            <h1>Header</h1>
            {/* left */}
            <div>
                <Image
                    src="/assets/images/cr7.png"
                    alt="test"
                    width={20}
                    height={40}
                    layout="responsive"
                />
            </div>
            {/* middle */}
            <div>

            </div>
            {/* right */}
            <div>

            </div>
        </header>
    )
}

export default Header