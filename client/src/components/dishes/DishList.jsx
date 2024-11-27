import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "@/features/order/orderSlice";
import { useToast } from "@/hooks/use-toast"
import { GiCook } from "react-icons/gi";
import DishModal from "./DishModal";
const dishes = [
    {
        _id: 'wqdqwd',
        name: "pizza 1",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0046_EggMcMuffin_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd2',
        name: "pizza 2",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202208_3590_BigBreakfast_HotCakes_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd3',
        name: "pizza 3",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    }
]

const DishList = ({ dish }) => {
    const { order } = useSelector(state => state.order)
    const [selectedDish, setSelectedDish] = useState({});
    const [dishModal, setDishModal] = useState(false);
    const { toast } = useToast()
    const dispatch = useDispatch()
    const handleAddToOrder = (item) => {
        const exist = order.items.find(singleItem => singleItem._id === item._id);
        if (exist) {
            // toast({
            //     title: "Item is already in the cart",
            //     description: "Increase the quality here....",
            // })
            return
        }
        else {
            dispatch(addOrder(item));
            setDishModal(false);
            toast({
                title: "Item is added to order list.",
            })
        }
    }
    console.log(order);

    return (
        <div className="relative">
            <h2 className="text-2xl font-semibold">{dish}</h2>
            <div className="absolute right-[50px]  md:right-[100px] top-0">
                <Dialog>
                    <DialogTrigger>
                        <Button>Make your own {dish} <GiCook /></Button>
                    </DialogTrigger>
                    <DialogContent>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex items-center justify-center gap-[80px] flex-wrap">
                <Dialog open={dishModal} onOpenChange={setDishModal}>
                    {
                        dishes.map(dish => <div
                            onClick={() => setSelectedDish(dish)}
                            key={dish._id}
                        >
                            <DialogTrigger>
                                <div className="flex flex-col items-center justify-between cursor-pointer">
                                    <div className="w-[250px]">
                                        <img className="object-cover bg-center text-xl" src={dish.imageUrl} alt="" />
                                    </div>
                                    <div className="flex justify-between w-full mt-4">
                                        <p className="">{dish.name}</p>
                                        <p className="">$ {dish.price}</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                        </div>)
                    }
                    <DialogContent>
                        {/* Dish Modal */}
                        <DishModal
                            selectedDish={selectedDish}
                            handleAddToOrder={handleAddToOrder}
                            order={order}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default DishList