import {Link} from "react-router-dom";
import {mainMenu} from "../../../../utils/consts.jsx";

export default function Menu() {
    return (
        <>
        <nav className={'mt-0.5 mb-1 '}>
            {mainMenu.map((item,index) => (
                <Link to={item.path} className={'py-1 block group'}>
                    <div className={'p-3 rounded-full flex items-center gap-5 text-xl group-hover:bg-[#eff3f41a]'}>
                        {item.icon}
                        <p>{item.title}</p>
                    </div>
                </Link>
            ))}
        </nav>
        </>
    )
}