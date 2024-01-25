import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import '../../css/project-base.css';

export default function Intro() {
    const [showModal, setShowModal] = useState(0);
    const [rechargeModal, setRechargeModal] = useState(0);

    return (
      <div className="relative py-24 sm:py-32">
        {/* Modal */}
        {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
          <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
              <div className='relative w-full mx-8 sm:w-[540px] bg-gradient-to-r from-[#111937] to-[#0F2835] p-10 rounded-xl flex items-center flex-col justify-center'>
                  <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-6 h-6 cursor-pointer top-3 right-3'/>
                  <div className='text-2xl font-bold text-left'>Withdraw</div>
                    <p className="mt-10 text-lg">Tokens</p>
                    <div className="flex flex-row items-center justify-center gap-10 mt-5">
                      <label class="container">
                        MEMO
                        <input type="radio" checked="checked" name="radio"></input>
                        <span class="checkmark"></span>
                      </label>
                      <label class="container">
                        DATAD
                        <input type="radio" name="radio"></input>
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <p className="mt-10">Number</p>
                    <input type="text" placeholder="Number" className="w-full p-3 mt-2 text-center bg-transparent border border-white rounded-xl max-w-[350px]"></input>
                    <p className="mt-10">Withdraw Total Amount</p>
                    <p className="mt-2 text-xl">0 USDT</p>
                    <div className="flex justify-center w-full">
                      <div className="bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] py-3 px-20 rounded-xl mt-10 cursor-pointer text-center">WITHDRAW</div>
                  </div>
              </div>        
          </div>
        </div>) : null}

          {/* Recharge */}
          {rechargeModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
          <div className='relative flex flex-col items-center justify-center w-full h-full text-white'>
              <div className='relative w-full mx-8 sm:w-[540px] bg-gradient-to-r from-[#111937] to-[#0F2835] p-10 rounded-xl flex items-center flex-col justify-center'>
                  <XMarkIcon onClick={() => setRechargeModal(0)} className='absolute w-6 h-6 cursor-pointer top-3 right-3'/>
                  <div className='text-2xl font-bold text-left'>RECHARGE</div>
                    <p className="mt-10 text-lg">Tokens</p>
                    <div className="flex flex-row items-center justify-center gap-10 mt-5">
                      <label class="container">
                        MEMO
                        <input type="radio" checked="checked" name="radio"></input>
                        <span class="checkmark"></span>
                      </label>
                      <label class="container">
                        DATAD
                        <input type="radio" name="radio"></input>
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <p className="mt-10">Number</p>
                    <input type="text" placeholder="Number" className="w-full p-3 mt-2 text-center bg-transparent border border-white rounded-xl max-w-[350px]"></input>
                    <div className="flex justify-center w-full">
                      <div className="bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] py-3 px-20 rounded-xl mt-10 cursor-pointer text-center">RECHARGE</div>
                  </div>
              </div>        
          </div>
        </div>) : null}

        <div className="px-6 mx-auto text-white max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-center mx-auto sm:text-center">
            <div className="flex flex-row justify-between w-full">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">My Nodes</h2>
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                Invitation code:
                <div className="bg-gradient-to-r from-[#0D2B4E] to-[#0D3955] py-2 px-7 border border-[#104370] rounded-md cursor-pointer hover:translate-y-[-5px] transition-transform duration-700 ease-in-out" onClick={() => setRechargeModal(1)}>Recharge</div>
                <div className="bg-gradient-to-r from-[#0D2B4E] to-[#0D3955] py-2 px-7 border border-[#104370] rounded-md cursor-pointer hover:translate-y-[-5px] transition-transform duration-700 ease-in-out" onClick={() => setShowModal(1)}>Withdraw</div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full mt-12 text-xl">
              <div>USDT: 0</div>
              <div>MEMO: 0</div>
              <div>DATAD: 0</div>
            </div>
            <div className="bg-gradient-to-r mt-12 rounded-xl from-[#0D1732] to-[#0C2530] w-full overflow-auto text-white">
              <div className="_md:w-[1225px]">
                <div className="flex flex-row p-4 py-5 text-base font-medium leading-5 text-center rounded-xl">
                  <div className='w-1/5'>Class</div>
                  <div className='w-1/5'>Pledge-DATAD</div>
                  <div className='w-1/5'>Pledge-MEMO</div>
                  <div className='w-1/5'>Share-DATAD</div>
                  <div className='w-1/5'>Share-MEMO</div>
                </div>
                <img src="./img/vision-bottom-line.png" className="my-1"></img>
                <div className="flex flex-row p-4 py-5 text-base font-medium leading-5 text-center rounded-xl">
                  <div className='w-1/5'>Total</div>
                  <div className='w-1/5'>0</div>
                  <div className='w-1/5'>0</div>
                  <div className='w-1/5'>0</div>
                  <div className='w-1/5'>0</div>
                </div>
                <div className="flex flex-row p-4 py-5 text-base font-medium leading-5 text-center rounded-xl">
                  <div className='w-1/5'>Profits</div>
                  <div className='w-1/5'>0</div>
                  <div className='w-1/5'>0</div>
                  <div className='w-1/5'>0</div>
                  <div className='w-1/5'>0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
