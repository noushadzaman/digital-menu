import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button";
import { GiNotebook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const ingredientsData = [
    {
        _id: "sdadadf1",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202110_00055-080__9049_BigMacSauce_1564x1564",
        name: "Special Sauce",
        price: 30
    },
    {
        _id: "sdadadf2",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202111_02679-243__0912_Ketchup_1564x1564",
        name: "Ketchup",
        price: 30
    },
    {
        _id: "sdadadf3",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202110_00026-041__0910_Mustard_1564x1564",
        name: "Mustard",
        price: 30
    },
    {
        _id: "sdadadf4",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202312_01116-309__0918_Mayonaise_1564x1564",
        name: "Mayonnaise",
        price: 30
    },
    {
        _id: "sdadadf5",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/t-original-spicy-sauce",
        name: "Spicy Pepper Sauce",
        price: 30
    },
    {
        _id: "sdadadf6",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202312_00009-000__9087_TartarSauce_1564x1564",
        name: "Tartar Sauce",
        price: 30
    },
    {
        _id: "sdadadf7",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce",
        name: "Shredded Lettuce",
        price: 30
    },
    {
        _id: "sdadadf8",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/reconstituted_onions",
        name: "Onions",
        price: 30
    },
    {
        _id: "sdadadf9",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/ClarifiedButter_180x180",
        name: "Clarified Butter",
        price: 30
    },
    {
        _id: "sdadadf10",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/ButterPad_180x180",
        name: "Salted Butter",
        price: 30
    },
    {
        _id: "sdadadf11",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202111_00033-079__0969_HotcakeSyrup_1564x1564",
        name: "Hotcake Syrup",
        price: 30
    },
];

const DishModal = ({ selectedDish, onOrder, order }) => {
    const [isIngredientsSliderOpen, setIsIngredientsSliderOpen] = useState();
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const itemsPrice = selectedIngredients.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity)
    }, 0);

    const addIngredients = (data) => {
        if (selectedIngredients.find(ing => ing._id === data._id)) {
            setSelectedIngredients(
                selectedIngredients.map(ing => {
                    if (ing._id === data._id) {
                        return { ...ing, quantity: ing.quantity + 1 }
                    }
                    else {
                        return { ...ing }
                    }
                })
            )
        }
        else {
            setSelectedIngredients([
                ...selectedIngredients,
                { ...data, quantity: 1 }
            ])
        }
    }

    const handleAddToOrder = () => {
        onOrder({
            ...selectedDish,
            extraItems: selectedIngredients
        })
    }

    const deleteItem = (data) => {
        setSelectedIngredients(selectedIngredients.filter(ing => ing._id !== data._id))
    }

    return (
        <div className="flex flex-col md:flex-row md:gap-[70px] items-center justify-center cursor-pointer px-[50px] md:min-h-[350px] min-h-[800px]">
            <div className="w-[250px] pb-[60px] shrink-0 relative">
                <div className="absolute top-5 right-0">
                    <div className={isIngredientsSliderOpen ? "rotate-45 translate-y-[350px] md:translate-y-[0px] md:translate-x-[350px]" : ""}>
                        <Tooltip>
                            <TooltipTrigger>
                                <FaPlus
                                    onClick={() => setIsIngredientsSliderOpen(prev => !prev)}
                                    size={25} />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add extra items</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                <img className="object-cover bg-center text-xl" src={selectedDish.imageUrl} alt="" />
                {
                    selectedIngredients.length > 0 ?
                        <>
                            <div className="flex justify-between">
                                <h3 className="">Selected Items:</h3>
                                <h3 className="">${itemsPrice}</h3>
                            </div>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full max-w-sm"
                            >

                                <CarouselContent>
                                    {
                                        selectedIngredients.map((ing, index) => (
                                            <CarouselItem key={index} className="basis-1/3">
                                                <div className="mt-4 flex flex-col items-center justify-center text-center relative">
                                                    <img src={ing.imgUrl} alt="" />
                                                    <span className="text-sm font-semibold">{ing.name}</span>
                                                    <span className="text-xs font-semibold">X{ing.quantity}</span>
                                                    <div
                                                        onClick={() => deleteItem(ing)}
                                                        className="absolute top-0 right-[-5px]">
                                                        <RxCross2 />
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </> : null
                }


            </div>
            {
                isIngredientsSliderOpen ?
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs"
                    >
                        <CarouselContent className="-mt-1 h-[280px]">
                            {ingredientsData.map((ing, index) => (
                                <CarouselItem
                                    onClick={() => addIngredients(ing)}
                                    key={index} className="pt-1 md:basis-1/2">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <div className="w-[100px]">
                                            <img src={ing.imgUrl} alt="" />
                                        </div>
                                        <div className="flex justify-between items-center min-w-[150px]">
                                            <span className="text-sm font-semibold">{ing.name}</span>
                                            <span className="text-sm font-semibold">${ing.price}</span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> :
                    <div className="flex flex-col gap-5 ">
                        <div className="flex flex-col space-y-2 mt-4">
                            <p className="text-2xl uppercase">{selectedDish.name}</p>
                            <p className="font-semibold">
                                {
                                    itemsPrice > 0 ?
                                        <>
                                            <p>${selectedDish.price}<span className="uppercase"> ({selectedDish.name})</span> + ${itemsPrice} (selected items)</p>
                                            <p>Total: ${selectedDish.price + itemsPrice}</p>
                                        </> :
                                        <p>${selectedDish.price}</p>
                                }
                            </p>
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
            }
        </div>
    )
}

export default DishModal