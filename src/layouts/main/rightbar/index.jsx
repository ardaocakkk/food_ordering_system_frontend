import Search from "./search/index.jsx";
import BestSeller from "./BestSeller/index.jsx";
import Cart from "./Cart/index.jsx";

export default function RightBar() {
    return (
        <>
            <aside className={'w-[350px] mr-2.5'}>
                <Search/>
                <BestSeller/>
                <Cart/>
            </aside>
        </>
        )

}