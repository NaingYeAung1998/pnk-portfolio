"use client"

import { FC, useEffect, useState } from "react"

export default function Navbar() {
    const [scrolledDown, setScrolledDown] = useState(false);

    const handleScroll = (window: Window, event: Event) => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
            setScrolledDown(true)
        } else {
            setScrolledDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', (event: Event) => {
            handleScroll(window, event);
        });

        return () => {
            window.removeEventListener('scroll', (event: Event) => {
                handleScroll(window, event)
            })
        }
    }, [])

    return (
        <>
            <div style={{ backgroundColor: scrolledDown ? 'black' : 'white', zIndex: 100 }} className="px-[32px] sticky top-0">
                <div style={{ color: scrolledDown ? 'white' : 'black', borderColor: scrolledDown ? 'black' : '#D0D3D6' }} className="py-[20px] grid lg:grid-cols-5 items-center border-b border-b-[#D0D3D6] leading-tight">
                    <div className="align-left flex-col">
                        <div className="text-[#8F969D]">Portfolio</div>
                        <div className="font-medium">by Phoe Nyan</div>
                    </div>
                    <div className="align-left flex-col">
                        <div className="text-[#8F969D]">Currently at</div>
                        <div className="font-medium">Bangkok</div>
                    </div>
                    <div className="md:flex gap-8 col-span-2">
                        <NavLink title="Work" link="/work" active={false} />
                        <NavLink title="About" link="/about" active={true} />
                        <NavLink title="Feed" link="/feed" active={false} />
                        <NavLink title="Articles" link="/articles" active={false} />
                        <NavLink title="Contact" link="/contact" active={false} />
                    </div>
                    <div className="text-right flex-col">
                        <div style={{ fontVariant: 'small-caps' }}>Download Resume</div>
                    </div>
                </div>
            </div>
        </>

    )
}

type NavLinkProps = {
    title: string,
    link: string,
    active: Boolean
}

const NavLink: FC<NavLinkProps> = ({ title, link, active }) => {

    return (
        <div className="font-medium flex items-center gap-[10px]">
            {
                active ?
                    <ActiveNavSpot /> :
                    <NavSpot />
            }
            {title}
        </div>
    )
}

const NavSpot = () => {
    return (
        <div className="w-[5px] h-[5px] bg-[#8F969D]"></div>
    )

}

const ActiveNavSpot = () => {
    const [flashing, setFlashing] = useState(true);
    useEffect(() => {
        const flashInterval = setInterval(() => {
            setFlashing(prevFlash => !prevFlash);
        }, 700)
        return () => {
            clearInterval(flashInterval)
        }
    }, [])
    return (
        <>
            {
                flashing ?
                    <div className="w-[5px] h-[5px] bg-[#FF5B5B]"></div> :
                    <div className="w-[5px] h-[5px] bg-transparent"></div>

            }
        </>
    )

}