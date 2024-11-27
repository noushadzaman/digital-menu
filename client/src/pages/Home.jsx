import { useSelector } from "react-redux";
import SelectLanguage from "../components/home/SelectLanguage";
import SelectService from "../components/home/SelectService";

const Home = () => {
    const order = useSelector(state => state.order);
    console.log(order);

    return (
        <>
            <SelectLanguage />
            <div className="flex items-center justify-center h-full">
                <SelectService />
            </div>
        </>
    )
}

export default Home