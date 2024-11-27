import { Button } from "../ui/button";
import { GiNotebook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

const DishModal = ({ selectedDish, handleAddToOrder, order }) => {
    
    return (
        <div className="flex flex-col md:flex-row md:gap-[50px] items-center justify-center cursor-pointer px-[50px]">
            <div className="w-[250px] pb-[60px] shrink-0">
                <img className="object-cover bg-center text-xl" src={selectedDish.imageUrl} alt="" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col space-y-2 mt-4">
                    <p className="text-2xl">{selectedDish.name}</p>
                    <p className="">$ {selectedDish.price}</p>
                    <p className="">{selectedDish.description}</p>
                </div>
                <Button onClick={() => handleAddToOrder(selectedDish)}>
                    {order.items.find(singleItem => singleItem._id === selectedDish._id) ?
                        <div className="flex gap-3 items-center justify-center">
                            <p>Increase quantity</p>
                            <FaPlus size={28} />
                        </div> :
                        <div className="flex gap-3 items-center justify-center">
                            <p>Add to order</p>
                            <GiNotebook size={28} />
                        </div>}
                </Button>
            </div>
        </div>
    )
}

export default DishModal