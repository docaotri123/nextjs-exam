import Image from "next/image"

function Header() {
    return (
        <header>
            <h1>Header</h1>
            {/* left */}
            <div>
                <Image
                    src="https://e7.pngegg.com/pngimages/398/500/png-clipart-airbnb-logo-airbnb-logo-icons-logos-emojis-tech-companies-thumbnail.png"
                    alt="test"
                    width={200}
                    height={300}
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