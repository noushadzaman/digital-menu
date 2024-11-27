import { useDispatch } from "react-redux"
import { DineIn, TakeOut } from "../../utils/constants";
import { selectService } from "../../features/order/orderSlice";
import { GiPaperBagOpen } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { Link } from 'react-router-dom'


const SelectService = () => {
    const dispatch = useDispatch();

    const handleSelectService = (service) => {
        dispatch(selectService(service));
    }

    return (
        <div className="flex gap-5">
            <Link
                to="/dishes"
                onClick={() => handleSelectService(TakeOut)}
                className="h-[100px] w-[270px] border-[3px] border-[#953453] bg-[#a95b68] rounded-lg flex items-center justify-center text-2xl font-semibold text-white uppercase tracking-wider cursor-pointer gap-5">
                <p>Take out</p><GiPaperBagOpen size={50} />
            </Link>
            <Link
                to="/dishes"
                onClick={() => handleSelectService(DineIn)}
                className="h-[100px] w-[240px] border-[3px] border-[#953453] bg-[#a95b68] rounded-lg flex items-center justify-center text-2xl font-semibold text-white uppercase tracking-wider cursor-pointer gap-5">
                <p>Dine In</p><GiMeal size={50} />
            </Link>
        </div>
    )
}

export default SelectService