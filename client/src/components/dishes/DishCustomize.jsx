import { totalPriceCountIngredient } from "@/utils";
import { useState } from "react"
import { Button } from "../ui/button";
const ingredientsData = [
    {
        _id: "Bigadasd",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/big_mac_bun",
        name: "Big  Mac  Bun",
        price: 12
    },
    {
        _id: "sdadadf2",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202111_00005-086__4259_BigMac_FreshBeefPatty_1564x1564",
        name: "Bun",
        price: 12
    },
    {
        _id: "sdadadf3",
        imgUrl: "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180",
        name: "Cheez",
        price: 30
    },
];

const DishCustomize = ({ dish, handleAddToOrder }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const totalPrice = totalPriceCountIngredient(selectedIngredients);

    const addIngredients = (ing) => {
        const exist = selectedIngredients.find(selectedIng => selectedIng._id === ing._id);
        if (exist) {
            return;
        }
        setSelectedIngredients([...selectedIngredients, ing]);
    }

    return (
        <div>
            {
                selectedIngredients.length > 0 && <>
                    <p>Custom {dish} with {selectedIngredients.map(ing => ing.name).join(', ')}</p>
                    <p>${totalPrice}</p>
                </>
            }
            <h2 className="mt-5">Available ingredients</h2>
            <div className="flex gap-2 flex-wrap items-center justify-center">
                {
                    ingredientsData.map(ing => <div
                        key={ing._id}
                        onClick={() => addIngredients(ing)}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="w-[100px] md:w-[200px] cursor-pointer mb-5">
                            <img className="object-cover" src={ing.imgUrl} alt="" />
                        </div>
                        <div className="flex gap-10 absolute bottom-5">
                            <p>{ing.name}</p>
                            <p>$ {ing.price}</p>
                        </div>
                    </div>
                    )
                }
            </div>
            <Button onClick={
                () => handleAddToOrder({
                    name: `Custom ${dish} with ${selectedIngredients.map(ing => ing.name).join(', ')}`,
                    price: totalPrice,
                    imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0046_EggMcMuffin_1564x1564-1:nutrition-calculator-tile",
                    // tags: ["dasd", "sfgd", "rewrd", "jhyhg"],
                    // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus minima at hic! Expedita inventore maiores unde voluptatum laudantium fuga, cumque accusamus dignissimos at facere? Earum veniam rerum nemo aliquid nulla illum eos qui iste, fuga dignissimos aspernatur, minima cu?",
                    ingredients: selectedIngredients,
                    category: dish
                })
            }>Add to order list</Button>
        </div>
    )
}

export default DishCustomize;