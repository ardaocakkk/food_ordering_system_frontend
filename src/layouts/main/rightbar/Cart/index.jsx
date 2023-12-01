export default function Cart() {
    return (
        <section className={'bg-[#16181c] mb-4 rounded-2xl border border-[#16181c] py-3 flex flex-col gap-2.5 text-[#e7e9ea]'}>
            <h6 className={'text-xl leading-6 font-extrabold m-2'}> Orders in your cart</h6>
            <div className={'overflow-scroll overflow-x-hidden max-h-[200px]'}>
                <div className={'flex flex-row gap-2.5 m-2'}>
                    <div className={'rounded-2xl'}> <img src={'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/62c59f6365a259b03da440de3973f201/Derivates/668cba6648888c61d249c0a5d9651157a4ce3793.jpg'} className={'w-[50px] h-[50px] rounded-full'} /> </div>
                    <div className={'flex flex-col gap-1.5'}>
                        <p className={'leading-5 text-[15px] font-bold'}>Pizza</p>
                        <p className={'leading-5 text-[15px] font-bold'}>Restoran ismi</p>

                    </div>
                </div>
                <div className={'flex flex-row gap-2.5 m-2'}>
                    <div className={'rounded-2xl'}> <img src={'https://www.ardaninmutfagi.com/wp-content/uploads/2015/11/pastirmali-hamburger.jpg'} className={'w-[50px] h-[50px] rounded-full'} /> </div>
                    <div className={'flex flex-col gap-1.5'}>
                        <p className={'leading-5 text-[15px] font-bold'}>Hamburger</p>
                        <p className={'leading-5 text-[15px] font-bold'}>Restoran ismi</p>
                    </div>
                </div>
                <div className={'flex flex-row gap-2.5 m-2'}>
                    <div className={'  rounded-2xl'}> <img src={'https://cdn.yemek.com/uploads/2016/10/ankara-donercileri-pecenek-doner.jpg'} className={'w-[50px] h-[50px] rounded-full'}/>  </div>
                    <div className={'flex flex-col gap-1.5'}>
                        <p className={'leading-5 text-[15px] font-bold'}>Doner</p>
                        <p className={'leading-5 text-[15px] font-bold'}>Restoran ismi</p>
                    </div>
                </div>
                <div className={'flex flex-row gap-2.5 m-2'}>
                    <div className={'rounded-2xl'}> <img src={'https://images.deliveryhero.io/image/fd-tr/LH/yqo0-hero.jpg'} className={'w-[50px] h-[50px] rounded-full'} /> </div>
                    <div className={'flex flex-col gap-1.5'}>
                        <p className={'leading-5 text-[15px] font-bold'}>Balik</p>
                        <p className={'leading-5 text-[15px] font-bold'}>Restoran ismi</p>
                    </div>
                </div>
            </div>

            <div className={'self-start m-2'}>
                <button className={'rounded-2xl bg-orange-500 p-2 text-xl font-bold'}>Sepete git</button>
            </div>
        </section>
    )
}