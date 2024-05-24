const Footer = () => {
  return (
    <footer className="w-full h-[40vh] flex flex-col bg-zinc-900 px-20">
      <div className="w-full h-[70%] flex">
        <div className="w-1/5 h-full flex flex-col pt-10 font-nohemiRegular">
          <p>© MEAL ROCKET</p>
          <p className="mt-5">
            Meal Rocket General Dealers
            Levy Shopping Mall,
            10101 Lusaka,
            Zambia
          </p>
        </div>
        <div className="w-1/5 ml-5 h-full flex flex-col pt-10 font-nohemiLight gap-y-2">
          <p className="hover:underline cursor-pointer">Terms and Conditions</p>
          <p className="hover:underline cursor-pointer">Partner with Us</p>
          <p className="hover:underline cursor-pointer">Careers</p>
        </div>
      </div>
      <div className="w-full h-[30%] border-t-4 border-white flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img className="w-8 h-8 bg-white rounded-full" />
          <p className="font-nohemiBold text-3xl translate-y-1">MEALROCKET</p>
        </div>
        <p className="font-nohemiRegular tracking-tight">© 2021 - {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}

export default Footer;
