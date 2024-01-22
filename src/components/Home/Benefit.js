export default function Benefit() {
    return (
      <div className="relative bg-[#0C0B12] py-24 sm:py-32 overflow-hidden">
        <img src="./img/mission-bg-ecllipse1.png" className="absolute top-0 left-0"></img>
        <img src="./img/mission-bg-ecllipse2.png" className="absolute top-0 right-0"></img>
        <img src="./img/benefit-left-rectangle.png" className="lg:block hidden absolute top-[-200px] left-0"></img>
        <img src="./img/benefit-right-rectangle.png" className="absolute lg:block hidden top-[-200px] right-0"></img>
        <div className="relative px-6 mx-auto text-white max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-center max-w-6xl mx-auto sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Big Benefits Readily Available</h2>
            <div className="max-w-2xl mt-10 leading-8 text-md">
                We help anyone who wants involve the Data Economy worldwide to take advantage of the latest technologies innovations
            </div>
            <div className="grid grid-cols-1 gap-20 mt-20 lg:grid-cols-2">
                <div className="flex flex-col max-w-md gap-5">
                    <div className="flex flex-row items-center gap-3">
                        <div className="bg-gradient-to-r from-[#0E313E] to-[#0B1524] rounded-full p-2">
                            <img src="./img/benefit-profit-icon.png"></img>    
                        </div>
                        Profitability
                    </div>
                    <img src="./img/benefit-bottom-bar.png"></img>
                    <div className="text-left">creating stronger incentives for users to contribute data that outweigh the current risk-reward.</div>
                </div>
                <div className="flex flex-col max-w-md gap-5">
                    <div className="flex flex-row items-center gap-3">
                        <div className="bg-gradient-to-r from-[#0E313E] to-[#0B1524] rounded-full p-2">
                            <img src="./img/benefit-dao-icon.png"></img>    
                        </div>
                        DAO Governance
                    </div>
                    <img src="./img/benefit-bottom-bar.png"></img>
                    <div className="text-left">by pushing the governing power from the hands of a few to a community of many.</div>
                </div>
                <div className="flex flex-col max-w-md gap-5">
                    <div className="flex flex-row items-center gap-3">
                        <div className="bg-gradient-to-r from-[#0E313E] to-[#0B1524] rounded-full p-2">
                            <img src="./img/benefit-trust-icon.png"></img>    
                        </div>
                        Trust Data
                    </div>
                    <img src="./img/benefit-bottom-bar.png"></img>
                    <div className="text-left">by creating a decentralized, permissionless, trust-minimized data intermediary that expands access and inclusion.</div>
                </div>
                <div className="flex flex-col max-w-md gap-5">
                    <div className="flex flex-row items-center gap-3">
                        <div className="bg-gradient-to-r from-[#0E313E] to-[#0B1524] rounded-full p-2">
                            <img src="./img/benefit-nft-icon.png"></img>    
                        </div>
                        NFTs
                    </div>
                    <img src="./img/benefit-bottom-bar.png"></img>
                    <div className="text-left">Participate in NFT projects in the DAO ecosystem and get the Tradable Digital collections NFTs.</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}
