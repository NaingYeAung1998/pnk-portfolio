export default function Navbar() {
    return (
        <>
            <NavbarWhite />
            <div className="h-[1500px] bg-white"></div>
        </>

    )
}

function NavbarWhite() {
    return (
        <div className="h-[97px] px-[32px] sticky top-0">
            <div className="py-[28px] grid lg:grid-cols-5 items-center border-b border-b-[#D0D3D6]">
                <div className="align-left flex-col">
                    <div className="text-[#8F969D]">Portfolio</div>
                    <div className="font-medium">by Phoe Nyan</div>
                </div>
                <div className="align-left flex-col">
                    <div className="text-[#8F969D]">Currently at</div>
                    <div className="font-medium">Bangkok</div>
                </div>
                <div className="flex gap-8 col-span-2">
                    <div className="font-medium flex items-center gap-[10px]">
                        <div className="w-[5px] h-[5px] bg-[#8F969D]"></div>
                        Work
                    </div>
                    <div className="font-medium">About</div>
                    <div className="font-medium">Feed</div>
                    <div className="font-medium">Articles</div>
                    <div className="font-medium">Contact</div>
                </div>
                <div className="text-right flex-col">
                    <div className="font-medium">DOWNLOAD RESUME</div>
                </div>
            </div>

        </div>
    )
}

function NavbarBlack() {
    return (
        <div className="px-[32px] bg-black sticky top-0 width-[100%]">
            <div className="py-[28px] grid lg:grid-cols-5 items-center border-b border-b-white text-white">
                <div className="align-left flex-col">
                    <div className="text-[#8F969D]">Portfolio</div>
                    <div className="font-medium">by Phoe Nyan</div>
                </div>
                <div className="align-left flex-col">
                    <div className="text-[#8F969D]">Currently at</div>
                    <div className="font-medium">Bangkok</div>
                </div>
                <div className="flex gap-8 col-span-2">
                    <div className="font-medium flex items-center gap-[10px]">
                        <div className="w-[5px] h-[5px] bg-[#8F969D]"></div>
                        Work
                    </div>
                    <div className="font-medium">About</div>
                    <div className="font-medium">Feed</div>
                    <div className="font-medium">Articles</div>
                    <div className="font-medium">Contact</div>
                </div>
                <div className="text-right flex-col">
                    <div className="font-medium">DOWNLOAD RESUME</div>
                </div>
            </div>

        </div>
    )
}