import {Popover, Transition} from "@headlessui/react";
import {useAccount} from "../../../../store/auth/hook.js";
import {logout} from "../../../../store/auth/index.js";

export default function Account() {
    const account = useAccount();
    return (
        <>
          <div className={"mt-auto"}>
              <Popover className={'relative'}>
                  <Popover.Button className={'my-3 px-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left'}>
                      <img src={account.avatar} className={'w-10 h-10 rounded-full'} />
                      <div className={'mx-3 text-[15px] '}>
                          <h6 className={'font-bold'}>{account.fullname}</h6>
                          <div className={'text-[#71767b]'}>
                              @{account.username}
                          </div>
                      </div>
                  </Popover.Button>
                  <Transition
                                      enter="transition-opacity duration-75"
                                      enterFrom="opacity-0"
                                      enterTo="opacity-100"
                                      leave="transition-opacity duration-150"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0">
                  <Popover.Panel className={'absolute bottom-full w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl mb-3 '}>
                      <button onClick={logout}  className={'w-full mx-auto items-center justify-center text-red-900 hover:bg-[#eff3f41a] rounded-2xl' }> Cikis Yap</button>
                  </Popover.Panel>
                  </Transition>
              </Popover>
          </div>
        </>
    )
}