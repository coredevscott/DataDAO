export default function Vision() {
    return (
      <div className="relative bg-[#100E17] py-24 sm:py-32 overflow-hidden">
        <img src="./img/mission-bg-ecllipse1.png" className="absolute top-0 left-0"></img>
        <img src="./img/mission-bg-ecllipse2.png" className="absolute top-0 right-0"></img>

        {/* Lightning effect - left */}
        <img src="./img/left-eclipse4.png" className='absolute hidden sm:block left-8 bottom-32'></img>
        <img src="./img/left-eclipse1.png" className='absolute sm:block hidden left-48 bottom-[265px]'></img>
        <img src="./img/left-eclipse2.png" className='absolute left-48 sm:block hidden bottom-[220px]'></img>
        <img src="./img/left-eclipse3.png" className='absolute hidden left-56 sm:block bottom-64'></img>
        {/* Lightning effect - right */}
        <img src="./img/right-eclipse4.png" className='absolute right-8 bottom-32'></img>
        <img src="./img/right-eclipse1.png" className='absolute right-52 bottom-[265px]'></img>
        <img src="./img/right-eclipse2.png" className='absolute right-60 bottom-[255px]'></img>
        <img src="./img/right-eclipse3.png" className='absolute right-52 bottom-56'></img>

        <div className="relative px-6 mx-auto text-white max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-center max-w-6xl mx-auto sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vision</h2>
            <div className="grid grid-cols-1 gap-20 mt-20 lg:grid-cols-3">
                <div className="flex flex-row items-center justify-center max-w-md gap-3 sm:gap-0">
                    <div className="flex flex-col gap-5 mt-[-150px]">
                        <div className="text-2xl font-bold">01</div>
                        <div className="text-center">By 2030, investment funds will spend over $100 billion on consumer data. If just 1% of us combined our data, Wall Street's spend could be our profit.</div>
                    </div>
                    <img src="./img/vision-vertical-divide.png"></img>
                </div>
                <div className="flex flex-col justify-center max-w-md gap-5 mt-[-150px]">
                    <div className="text-2xl font-bold">
                        02
                    </div>
                    {/* <img src="./img/benefit-bottom-bar.png"></img> */}
                    <div className="text-center">The bigger the data set, the better the AI. Sharing data is a bold proposition. That's why we've partnered with a Data.</div>
                </div>
                <div className="flex flex-row items-center justify-center max-w-md gap-3">
                    <img src="./img/vision-vertical-divide.png"></img>
                    <div className="flex flex-col gap-5 mt-[-150px]">
                        <div className="text-2xl font-bold">03</div>
                        <div className="text-center">Yet over the past 20 years, our data has helped build the world's largest companies and created unimaginable fortunes. </div>
                    </div>                
                </div>
            </div>
          </div>
        </div>
        <img src="./img/vision-bottom-line.png" className="mt-10"></img>
      </div>
    )
}
