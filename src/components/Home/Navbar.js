import '../../css/project-base.css';
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi'
import { useChainId } from 'wagmi';

import { Link } from 'react-router-dom';

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'POLICY', href: '/policy', current: false },
  { name: 'MISSION', href: '/mission', current: false },
  { name: 'NODES', href: '/nodes', current: false },
  { name: 'MYNODE', href: '/mynode', current: false },
  { name: 'DOCS', href: 'https://datadao.gitbook.io/datadao/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const account = useAccount();
  const chainId = useChainId();

  return (
    <Disclosure as="nav" className="relative">
      {({ open }) => (
        <>
          <div className="px-2 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
                <div className="text-[#1587E7] items-center flex-shrink-0 font-semibold text-xl sm:flex hidden">
                  DataDAO
                </div>
                <div className="items-center hidden sm:ml-6 sm:flex">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          'rounded-md px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-20'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <ConnectButton.Custom>
                  {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      authenticationStatus,
                      mounted,
                  }) => {
                      const ready = mounted && authenticationStatus !== 'loading';
                      const connected =
                          ready &&
                          account &&
                          chain &&
                          (!authenticationStatus ||
                              authenticationStatus === 'authenticated');

                      return (
                          <div
                              {...(!ready && {
                                  'aria-hidden': true,
                                  'style': {
                                      opacity: 0,
                                      pointerEvents: 'none',
                                      userSelect: 'none',
                                  },
                              })}
                          >
                              {(() => {
                                  if (!connected) {
                                      return (
                                          <button className="gradient-border text-sm py-1 px-3 rounded-md flex items-center text-transparent bg-gradient-to-r from-[#1A61ED] to-[#11BAE3] bg-clip-text" onClick={openConnectModal} type="button">
                                              Connect Wallet
                                          </button>
                                      );
                                  }
                                  return (
                                    <div className='flex gap-5 p-2 text-white border border-white rounded-md'>
                                        <button
                                            onClick={openChainModal}
                                            style={{ display: 'flex', alignItems: 'center' }}
                                            type="button"
                                        >
                                            {chain.hasIcon && (
                                                <div
                                                    style={{
                                                        background: chain.iconBackground,
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: 999,
                                                        overflow: 'hidden',
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    {chain.iconUrl && (
                                                        <img
                                                            alt={chain.name ?? 'Chain icon'}
                                                            src={chain.iconUrl}
                                                            style={{ width: 24, height: 24 }}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                            {chain.name}
                                        </button>

                                        <button onClick={openAccountModal} type="button">
                                            {account.displayName}
                                            {account.displayBalance
                                                ? ` (${account.displayBalance})`
                                                : ''}
                                        </button>
                                    </div>
                                  );
                              })()}
                          </div>
                      );
                  }}
                </ConnectButton.Custom>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="Link"
                  to={item.href}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white hover:bg-opacity-20'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
