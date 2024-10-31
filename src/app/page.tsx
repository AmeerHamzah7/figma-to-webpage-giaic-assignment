export default function Home() {
      return (
            <div className="w-[1440px] h-[1132px] mx-auto text-[#FFFFFF]">
                  <div id="container" className="!w-[1046px] h-[1028px] absolute top-[104px] left-[197px] pt-[80px] pb-[80px] gap-[80px] flex flex-col items-center justify-center">
                        <div id="row1" className="!w-[701px] h-[496px]">
                              <main className="!w-[699px] h-[496px] pt-[40px] pb-[40px] gap-[40px] flex flex-col justify-center items-center">
                                    <h5 className="w-[77px] h-[24px] font-bold text-[16px] leading-[24px] text-[#23A6F0] text-center" id="welcome">Welcome</h5>
                                    <h1 className="w-[546px] h-[160px] font-bold text-[58px] leading-[80px] text-center tracking-[0.2px]">Selling on the internet like a pro</h1>
                                    <h4 className="w-[536px] h-[60px] font-normal text-[20px] leading-[30px] text-center tracking-[0.2px]">We know how large objects will act, but things on a small scale just do not act that way.</h4>

                                    <div id="buttons" className="w-[365px] h-[52px] flex gap-[10px]">
                                          <button className="w-[193px] h-[52px] rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] bg-[#23A6F0]">
                                                <p className="w-[113px] h-[22px] font-bold text-[14px] leading-[22px] text-center">Get Quote Now</p>
                                          </button>

                                          <button className="w-162px h-52px rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] border-[#23A6F0] border-[1px]">
                                                <p className="w-[83px] h-[22px] font-bold text-[14px] leading-[22px] text-center">Learn More</p>
                                          </button>
                                    </div>
                              </main>
                        </div>

                        <div id="row2" className="w-[1046px] h-[292px] gap-[30px] flex">
                              <div id="car1" className="!w-[328px] h-[292px]">
                                    <div className="pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] flex flex-col bg-[#FFFFFF]">
                                          <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] bg-[#FFDCD1]"></div>
                                          <h3 className="w-[140px] h-[24px] font-bold text-[16px] leading-[24px] text-[#252B42] tracking-[0.1px]">training Courses</h3>
                                          <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
                                          <p className="w-[222px] h-[60px] font-normal leading-[20px] text-[14px] text-[#737373] tracking-[0.2px]">The gradual accumulation of <br />information about atomic and <br />small-scale behaviour...</p>
                                    </div>
                              </div>

                              <div id="car2" className="!w-[329px] h-[292px]">
                                    <div className="!w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] flex flex-col bg-[#FFFFFF]">
                                          <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] bg-[#B9EAA8] gap-[10px]"></div>
                                          <h3 className="w-auto h-[24px] font-bold text-[16px] leading-[24px] text-[#252B42] tracking-[0.1px]">2,769 online courses</h3>
                                          <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
                                          <p className="w-[222px] h-[60px] font-normal leading-[20px] text-[14px] text-[#737373] tracking-[0.2px]">The gradual accumulation of <br />information about atomic and <br />small-scale behaviour...</p>
                                    </div>
                              </div>

                              <div id="car3" className="!w-[329px] h-[292px]">
                                    <div className="!w-[328px] h-[292px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] flex flex-col bg-[#23A6F0]">
                                          <div className="w-[70px] h-[76px] rounded-[10px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] bg-[#FFFFFF] gap-[10px]"></div>
                                          <h3 className="w-[168px] h-[24px] font-bold text-[16px] leading-[24px] text-[#FFFFFF] tracking-[0.1px]">training Courses</h3>
                                          <div className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
                                          <p className="w-[222px] h-[60px] font-normal leading-[20px] text-[14px] text-[#FFFFFF] tracking-[0.2px]">The gradual accumulation of <br />information about atomic and <br />small-scale behaviour...</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}