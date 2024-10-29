import Link from "next/link";

export default function Navbar() {
      return(
            <nav className="flex w-[1322px] h-[91px] relative left-[59px]">
                <div className="w-[1322px] h-[91px]"></div>
                        <div className="w-[815px] h-[58px] absolute top-[16px] left-[364px]">
                            
                            <div id="navbar-nav" className="w-[275px] h-[24px] absolute top-[17px] gap-[21px] flex">
                                        <li className="w-[43px] h-[24px] list-none"><Link href="/" className="text-sm font-bold leading-[24px] items-center text-[#FFFFFF] tracking-[0.2px]">Home</Link></li>
                                        <li className="w-[59px] h-[24px] list-none"><Link href="/product" className="text-sm font-bold leading-[24px] items-center text-[#FFFFFF] tracking-[0.2px]">Product</Link></li>
                                        <li className="w-[52px] h-[24px] list-none"><Link href="/pricing" className="text-sm font-bold leading-[24px] items-center text-[#FFFFFF] tracking-[0.2px]">Pricing</Link></li>
                                        <li className="w-[58px] h-[24px] list-none"><Link href="/contact" className="text-sm font-bold leading-[24px] items-center text-[#FFFFFF] tracking-[0.2px]">Contact</Link></li>
                            </div>
                            
                            <div id="navbar-nav" className="flex items-center !w-[189px] h-[52px] absolute top-[3px] left-[626px] gap-[45px]">
                                    <div id="nav-item" className="w-[41px] h-[22px]">
                                        <Link href="/login" className="font-bold leading-[22px] text-[#FFFFFF] tracking-[0.2px]">Login</Link>
                                    </div>

                                    <div id="buttonDiv" className="w-[214px] h-[52px]">
                                        <button className="w-[110px] h-[52px] rounded-[5px] pt-[15px] pr-[25px] pb-[15px] pl-[25px] gap-[15px] bg-[#23A6F0]">
                                            <p className="w-[61px] h-[22px] font-bold text-[14px] leading-[22px] text-[#FFFFFF] tracking-[0.2px]">JOIN US</p>
                                        </button>
                                    </div>
                            </div>
                </div>

                <div id="brand" className="w-[187px] h-[58px] absolute top-[17px] left-[136px]">
                        <h3 className="w-[152px] h-[32px] absolute top-[13px] font-bold text-2xl leading-[32px] text-[#FFFFFF] tracking-[0.1px]">BrandName</h3>
                </div>
            </nav>
      )
}