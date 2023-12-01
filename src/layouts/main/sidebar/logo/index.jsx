import logoo from '/src/assets/images/logoo.jpg'
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <>
            <div className={'py-0.5'}>
            <Link to={'/'} className={'w-max rounded-full flex items-center justify-center'}>
            <div className={'flex items-center justify-center h-16'}>
                <img src={logoo} alt={'logo'} className={'w-15 h-20'} />
            </div>
            </Link>
            </div>
        </>
    )
}