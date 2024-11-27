import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from '../../features/order/orderSlice';
import { EngLang, FinnLang, SweLang } from '../../utils/constants';
import EngFlag from '../../assets/english.png';
import FinFlag from '../../assets/finnish.png';
import SweFlag from '../../assets/swedish.webp';

const SelectLanguage = () => {
    const { language } = useSelector(state => state.order);
    const dispatch = useDispatch();
    
    const handleSelectLanguage = (lang) => {
        dispatch(selectLanguage(lang));
    }

    return (
        <>
            <div className='flex gap-4 absolute right-[50px] top-[50px] md:right-[100px] md:top-[100px]'>
                <div
                    onClick={() => handleSelectLanguage(EngLang)}
                    className={`w-[70px] h-[70px] rounded-full overflow-hidden border-[3px] cursor-pointer ${language === EngLang ? 'border-[#953453]' : ''}`}
                >
                    <img className='object-cover h-full bg-center' src={EngFlag} alt="" />
                </div>
                <div
                    onClick={() => handleSelectLanguage(FinnLang)}
                    className={`w-[70px] h-[70px] rounded-full overflow-hidden border-[3px] cursor-pointer ${language === FinnLang ? 'border-[#953453]' : ''}`}
                >
                    <img className='object-cover h-full bg-center' src={FinFlag} alt="" />
                </div>
                <div
                    onClick={() => handleSelectLanguage(SweLang)}
                    className={`w-[70px] h-[70px] rounded-full overflow-hidden border-[3px] cursor-pointer ${language === SweLang ? 'border-[#953453]' : ''}`}
                >
                    <img className='object-cover h-full bg-center' src={SweFlag} alt="" />
                </div>
            </div>
        </>
    )
}

export default SelectLanguage