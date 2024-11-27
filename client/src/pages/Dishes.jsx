import DishList from "@/components/dishes/DishList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Dishes = () => {
  const dishTypes = [
    "Burger",
    "Pizza",
    "Pasta",
    "Desert",
    "Salad",
    "Drink",
  ];

  return (
    <Tabs defaultValue={dishTypes[0]} className="">
      <TabsList>
        {
          dishTypes.map(dish => <TabsTrigger
            key={dish}
            value={dish}>{dish}</TabsTrigger>)
        }
      </TabsList>
      {
        dishTypes.map(dish => <TabsContent
          key={dish}
          value={dish}>
          <DishList dish={dish} />
        </TabsContent>)
      }
    </Tabs>
  )
}

export default Dishes;