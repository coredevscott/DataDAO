import { FaDiscord, FaMedium } from "react-icons/fa6";
import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Benefit() {
    return (
        <div className="w-full bg-gradient-to-r from-[#091729] to-[#091527] px-10 lg:px-48 py-8 sm:py-16">
            <div className="flex flex-col lg:justify-between lg:flex-row gap-7 lg:gap-0">
                <div className="flex flex-col gap-7">
                    <div className="text-[#1587E7] flex items-start flex-shrink-0 font-semibold text-xl">DataDAO</div>
                    <div className="max-w-sm text-sm text-left text-white">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                    <div className="flex flex-row gap-5">
                        <a href="https://t.me/datadaoglobal" target="_blank"><div className="hover:translate-y-[-5px] transition-transform duration-700 ease-in-out border border-[#104370] text-white p-2 rounded-md bg-[#0D3955] cursor-pointer"><FaTelegramPlane className="w-5 h-5"/></div></a>
                        <a href="https://discord.com/invite/wSBJCEMf2M" target="_blank"><div className="hover:translate-y-[-5px] transition-transform duration-700 ease-in-out border border-[#104370] text-white p-2 rounded-md bg-[#0D3955] cursor-pointer"><FaDiscord className="w-5 h-5"/></div></a>
                        <a href="https://twitter.com/DataDaoCloud" target="_blank"><div className="hover:translate-y-[-5px] transition-transform duration-700 ease-in-out border border-[#104370] text-white p-2 rounded-md bg-[#0D3955] cursor-pointer"><FaTwitter className="w-5 h-5"/></div></a>
                        <a href="https://medium.com/@clouddao5" target="_blank"><div className="hover:translate-y-[-5px] transition-transform duration-700 ease-in-out border border-[#104370] text-white p-2 rounded-md bg-[#0D3955] cursor-pointer"><FaMedium className="w-5 h-5"/></div></a>
                        <a href="https://github.com/datadaocloud" target="_blank"><div className="hover:translate-y-[-5px] transition-transform duration-700 ease-in-out border border-[#104370] text-white p-2 rounded-md bg-[#0D3955] cursor-pointer"><FaGithub className="w-5 h-5"/></div></a>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:gap-32">
                    <div className="flex flex-col gap-3 text-left text-white">
                        <Link to="/" className="font-bold">About us</Link>
                        <Link to="/">WEB3</Link>
                        <Link to="/">Nodes</Link>
                        <Link to="/">My Nodes</Link>
                    </div>
                    <div className="flex flex-col gap-3 text-left text-white">
                        <p className="font-bold">Community</p>
                        <a href="https://t.me/datadaoglobal" target="_blank">Telegram</a>
                        <a href="https://medium.com/@clouddao5" target="_blank">Medium</a>
                        <a href="https://discord.com/invite/wSBJCEMf2M" target="_blank">Discord</a>
                        <a href="https://twitter.com/DataDaoCloud" target="_blank">Twitter</a>
                        <a href="https://github.com/datadaocloud" target="_blank">Github</a>
                    </div>
                    <div className="flex flex-col gap-3 text-left text-white">
                        <Link to="/" className="font-bold">Subscribe Email</Link>
                        <div className="relative w-[300px]">
                            <input type="text" placeholder="Enter E-mail" className="bg-gradient-to-b from-[#0B2042] to-[#0B2C42] rounded-md p-3 w-[300px]"></input>
                            <FaTelegramPlane className="absolute w-6 h-6 text-white cursor-pointer top-[10px] right-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
