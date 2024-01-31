import { useEffect } from "react";
import { useState } from "react"
import Web3 from "web3";

import ERC20ABI from '../ContractABI/ERC20ABI.json';

import {
  useAccount,
} from "wagmi";

export default function Nodes() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [count, setCount] = useState('2');
    const account = useAccount();

    const transferUSDT = async () => {
      if(window.ethereum && account.address){
        let web3 = new Web3(window.ethereum);
        const usdtContract = new web3.eth.Contract(ERC20ABI, '0xdac17f958d2ee523a2206206994597c13d831ec7');

        await usdtContract.methods.transfer('0x48515F7d0B7280d59eCBE06d09B9EB7FEaDe73af', totalAmount * 1000000).send({
          from: account.address,
        });
      }
      else {
        alert('Please connect wallet first');
      }
    };

    useEffect(() => {
      setTotalAmount(800 * parseInt(count));
    }, [count]);

    return (
      <div className="relative py-24 sm:py-32">
        <div className="px-6 mx-auto text-white max-w-7xl lg:px-8">
          <div className="flex flex-col items-center justify-center mx-auto sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Node</h2>
            <div className="flex flex-col items-center justify-center gap-12 mt-24 lg:gap-48 lg:flex-row">
              <img src="./img/nodes-fore-image.png" className="w-80 h-80"></img>
              <div className="flex flex-col gap-10 min-w-[250px]">
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  <p className="text-sm">Price</p>
                  <p className="text-2xl font-semibold">800 USDT</p>
                </div>
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  <p className="text-sm">Total Supply</p>
                  <p className="text-2xl font-semibold">300</p>
                </div>
                <div className="flex flex-col gap-3 text-center lg:text-left">
                  <p className="text-sm">Intro</p>
                  <p className="font-medium text-md">Enabling secure and efficient data storage and decentralized applications.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#111937] to-[#0F2835] rounded-xl p-6 text-left sm:min-w-[450px]">
                <p className="text-2xl font-medium lg:text-3xl">Checkout</p>
                <p className="mt-10 text-lg">Enter Your Referral Code</p>
                <input type="text" placeholder="Optional" className="w-full p-3 mt-2 bg-transparent border border-white rounded-xl"></input>
                <p className="mt-2 text-sm text-gray-500">Referral code cannot be changed after purchase</p>
                <p className="mt-10 text-sm">Price</p>  
                <p className="mt-2 text-2xl">800 USDT</p>
                <p className="mt-10">Number</p>
                <input type="text" placeholder="Number" value={count} onChange={(e) => setCount(e.target.value)} className="w-full p-3 mt-2 bg-transparent border border-white rounded-xl"></input>
                <p className="mt-10">Estimated Total Amount</p>
                <p className="mt-2 text-xl">{totalAmount} USDT</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-10">
                  <input type="checkbox"></input><p>I have read and agree that DATADAO are not investments.</p>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] py-3 px-20 rounded-xl mt-10 cursor-pointer text-center" onClick={() => {transferUSDT()}}>BUY NOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
