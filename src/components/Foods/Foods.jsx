/* eslint-disable react/prop-types */
import FoodCard from '../FoodCard/FoodCard'

export default function Foods({items}) {
    return (
        <div className="grid md:grid-cols-3 gap-10 px-20 my-14">
            {
                items.map(salad => <FoodCard key={salad?._id} item={salad}></FoodCard>)
            }
        </div>
    )
}
