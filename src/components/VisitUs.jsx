import { dummyMapImage, levyImage, shop1Image } from "../lib";

const VisitUs = () => {
  return (
    <section className="mt-20 flex items-center justify-center">
      <div className="w-[85%] h-[85%] flex items-center">
        <div className="w-1/2 h-[93.5%] flex flex-col justify-between">
          <div className="w-full h-[45%] flex items-center">
            <div className="w-[45%] h-full flex flex-col items-center font-nohemiBold">
              <p className="text-9xl">VISIT</p>
              <p className="text-[225px] -translate-y-[65px]">US</p>
            </div>
            <div className="w-[55%] h-full flex items-center justify-end">
              <div className="w-[90%] h-full border-[3px] border-white rounded-[5px] flex items-center justify-center">
                <img src={dummyMapImage} alt="map Image" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
          <span className="w-full h-0 border border-gray-200" />
          <div className="w-full h-[50%] flex flex-col">
            <div className="w-full h-2/3 p-5">
              <p className="w-full h-1/2 text-2xl font-nohemiRegular text-center">Find us at Shop Number 123, Levy Shopping Mall, Lusaka</p>
              <div className="w-full h-1/2 flex items-center justify-center gap-x-6">
                <div className="w-[30%] h-[85%] rounded-[40px] bg-red-900 flex items-center justify-center cursor-pointer hover:opacity-75 active:opacity-40">
                  <p className="font-nohemiBold text-xl">ORDER FOOD</p>
                </div>
                <div className="w-[30%] h-[85%] rounded-[40px] bg-white flex items-center justify-center cursor-pointer hover:opacity-75 active:opacity-40">
                  <p className="text-black font-nohemiBold text-xl">RESERVE TABLE</p>
                </div>
              </div>
            </div>
            <div className="w-full h-1/3 flex flex-col">
              <div className="w-full h-[25%] text-center font-nohemiExtraBold text-xl">CONTACT</div>
              <div className="w-full h-[75%] flex items-center justify-evenly text-xl font-nohemiExtraLight">
                <p className="cursor-pointer hover:opacity-75 active:opacity-40">WHATSAPP</p>
                <p className="cursor-pointer hover:opacity-75 active:opacity-40">INSTAGRAM</p>
                <p className="cursor-pointer hover:opacity-75 active:opacity-40">FACEBOOK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-6">
          <img src={levyImage} alt="levyImage" className="w-[90%] h-[45%] object-cover rounded-tr-[40px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"/>
          <div className="w-[90%] h-[45%] flex items-center justify-between">
            <img src={shop1Image} alt="shop Image 1" className="w-[48%] h-full object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"/>
            <img src={shop1Image} alt="shop Image 2" className="w-[48%] h-full object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUs;
