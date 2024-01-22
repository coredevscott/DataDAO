export default function Mission() {
  return (
    <div className="relative bg-[#100E17] py-24 sm:py-32 overflow-hidden">
      <img src="./img/mission-bg-ecllipse1.png" className="absolute top-0 left-0"></img>
      <img src="./img/mission-bg-ecllipse2.png" className="absolute top-0 right-0"></img>
      <div className="relative px-6 mx-auto text-white max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center mx-auto max-w-7xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
          <div className="max-w-4xl mt-10 leading-8 text-md">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </div>
          <div className="flex flex-col mt-20 lg:mt-10 lg:flex-row">
            <div className="flex flex-col min-w-[250px]">
              <div className="px-20 py-4 text-white bg-gradient-to-r from-[#111937] to-[#0F2835] rounded-md cursor-pointer">Mission 1</div>
              <div className="px-20 py-4 text-white bg-transparent hover:bg-gradient-to-r from-[#111937] to-[#0F2835] cursor-pointer">Mission 2</div>
              <div className="px-20 py-4 text-white bg-transparent hover:bg-gradient-to-r from-[#111937] to-[#0F2835] cursor-pointer">Mission 3</div>
            </div>
            <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row">
              <p className="py-4 rounded-md text-white bg-gradient-to-r from-[#111937] to-[#102235] flex justify-center items-center px-6">The mission is to put the data created by users in their own hands and return data ownership to the people. We will build a decentralized data structure, using decentralized cloud storage technology to store and encrypt user data, and any platform, intermediary or institution must be authorized by the user to allow access to the data.</p>
              <img src="./img/mission-fore-image.png" className="mt-5 ml-7 lg:ml-0 h-60 w-80 lg:mt-0"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
