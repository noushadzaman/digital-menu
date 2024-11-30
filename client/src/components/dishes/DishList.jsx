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
import DishCustomize from "./DishCustomize";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
const ItemPerPage = 6;
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
    },
    {
        _id: 'wqdqw4',
        name: "pizza 4",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0046_EggMcMuffin_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd5',
        name: "pizza 5",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202208_3590_BigBreakfast_HotCakes_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd6',
        name: "pizza 6",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqw7',
        name: "pizza 7",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0046_EggMcMuffin_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd8',
        name: "pizza 8",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202208_3590_BigBreakfast_HotCakes_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd902',
        name: "pizza 9",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
    {
        _id: 'wqdqwd9',
        name: "pizza 10",
        price: 32,
        imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_1564x1564-1:nutrition-calculator-tile",
        tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
        category: "pizza"
    },
]

const DishList = ({ dish }) => {
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(Math.ceil(dishes.length / ItemPerPage));
    const { order } = useSelector(state => state.order)
    const [selectedDish, setSelectedDish] = useState({});
    const [dishModal, setDishModal] = useState(false);
    const { toast } = useToast();
    const dispatch = useDispatch();

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
    const pageDecreament = () => {
        if (page < 1 || page === 1) {
            return
        }
        setPage(prev => prev - 1)
    }
    const pageIncreament = () => {
        if (page < pageCount) {
            setPage(prev => prev + 1)
        }
    }

    return (
        <div className="relative">
            <h2 className="text-2xl font-semibold">{dish}</h2>
            {/* <div className="absolute right-[50px] md:right-[100px] top-0">
                <Dialog>
                    <DialogTrigger>
                        <Button>Make your own {dish} <GiCook /></Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DishCustomize dish={dish} handleAddToOrder={handleAddToOrder} />
                    </DialogContent>
                </Dialog>
            </div> */}
            <div className="flex items-center justify-center gap-[40px] flex-wrap mt-[50px]">
                <Dialog open={dishModal} onOpenChange={setDishModal}>
                    {
                        dishes
                            .slice((page - 1) * ItemPerPage, (page - 1) * ItemPerPage + ItemPerPage)
                            .map(dish => <div
                                onClick={() => setSelectedDish(dish)}
                                key={dish._id}
                            >
                                <DialogTrigger>
                                    <div className="flex flex-col items-center justify-between cursor-pointer shadow-2xl px-4 pb-4 rounded">
                                        <div className="w-[250px]">
                                            <img className="object-cover bg-center text-xl" src={dish.imageUrl} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full items-center">
                                            <p className="text-xl">{dish.name}</p>
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
                            onOrder={handleAddToOrder}
                            order={order}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-[50px]">
                <Pagination>
                    <PaginationContent>

                        <PaginationItem>
                            <PaginationPrevious
                                onClick={pageDecreament}

                                href="#" />
                        </PaginationItem>

                        {
                            Array(pageCount).fill(0).map((pc, index) => <PaginationItem
                                key={pc}
                                onClick={() => setPage(index + 1)}
                            >
                                <PaginationLink href="#" isActive={page === index + 1}>
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>)
                        }

                        {/* <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem> */}

                        <PaginationItem>
                            <PaginationNext
                                onClick={pageIncreament}
                                href="#" />
                        </PaginationItem>

                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default DishList