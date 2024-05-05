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
              <div className="w-[90%] h-full bg-white rounded-tr-[20px]"></div>
            </div>
          </div>
          <span className="w-full h-0 border border-gray-200" />
          <div className="w-full h-[50%] bg-red-900"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-6">
          <img className="w-[90%] h-[45%] bg-white rounded-t-[40px]"/>
          <div className="w-[90%] h-[45%] flex items-center justify-between">
            <img className="w-[48%] h-full bg-white"/>
            <img className="w-[48%] h-full bg-white"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUs;
