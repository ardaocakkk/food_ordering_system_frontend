import Logo from "./logo/index.jsx";
import Menu from "./menu/index.jsx";
import Account from "./account/index.jsx";

export default function Sidebar() {
    return (
        <>
            <aside className={'w-[275px] min-h-screen px-2 flex flex-col'}>
                <Logo/>
                <Menu/>
                <Account/>
            </aside>
        </>
        )

}