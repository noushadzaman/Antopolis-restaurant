import BestSellingDishes from "./BestSellingDishes";

export async function getStaticProps() {
    // Fetch JSON from the public folder without using the environment variable
    const res = await fetch('/best-selling-dishes.json'); // Relative URL works for public files

    if (!res.ok) {
        console.error('Failed to fetch the data');
        return { props: { dishes: [] } };
    }

    const data = await res.json();

    return {
        props: {
            dishes: data.dishes,
        },
    };
}


const BestSellingSection = ({ dishes }) => {
    console.log(dishes);


    return (
        <div>
            <BestSellingDishes dishes={dishes} />
        </div>
    );
};

export default BestSellingSection;
