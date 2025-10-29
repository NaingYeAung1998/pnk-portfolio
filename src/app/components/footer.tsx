import Divider from "./divider";

export default function Footer() {
    return (
        <div className="p-[50px]">
            <div className="sm:grid grid-cols-3 gap-4 pb-[20px]">
                <div className="text-[24px]">
                    Reach out to me for collaborations <br /> inquiries or just to connect.
                    <div className="w-[100%] h-[27px]"></div>
                    <div className="w-[337px] h-[54px] bg-[#F4F4F4] px-[20px] items-center flex justify-between">
                        <div className="text-[16px] tracking-wider">phoenyankyaw@gmail.com</div>
                    </div>
                    <div className="h-[27px]"></div>
                    <button className="w-[177px] h-[39px] bg-black text-white flex items-center justify-center text-[16px] rounded-[20px] cursor-pointer tracking-wider">Send Message</button>
                </div>
                <div className="col-span-2 p-[20px] pt-[30px] sm:flex justify-between">
                    <div className="text-[16px] leading-[30px] tracking-wider">
                        <p className="text-[#111111]">SEE MORE</p>
                        <div className="h-[24px]"></div>
                        <p className="text-[#777777]">Product design</p>
                        <p className="text-[#777777]">UI Interaction</p>
                        <p className="text-[#777777]">3D Mockups & Modeling</p>
                        <p className="text-[#777777]">Industrial Sketch</p>
                        <p className="text-[#777777]">Mixed and Augmented Reality</p>
                    </div>
                    <div className="text-[16px] leading-[30px] tracking-wider">
                        <p className="text-[#111111]">FOLLOW ALONG</p>
                        <div className="h-[24px]"></div>
                        <p className="text-[#777777]">Instagram</p>
                        <p className="text-[#777777]">Linkedin</p>
                        <p className="text-[#777777]">Twitter</p>
                        <p className="text-[#777777]">Behance</p>
                        <p className="text-[#777777]">Dribble</p>
                    </div>
                    <div className="text-[16px] leading-[30px] tracking-wider">
                        <p className="text-[#111111]">SITE MAP</p>
                        <div className="h-[24px]"></div>
                        <p className="text-[#777777]">Work</p>
                        <p className="text-[#777777]">About</p>
                        <p className="text-[#777777]">Feed</p>
                        <p className="text-[#777777]">Articles</p>
                        <p className="text-[#777777]">Contact</p>
                    </div>
                </div>

            </div>
            <Divider />
            <div className="text-[16px] tracking-wider">@ 2025, Instrument. All Rights Reserved.</div>
        </div>
    )
}