import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function generateStars(rating) {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(
            <StarOutlinedIcon key={i} className='text-yellow-400 h-5 w-5' />
        )
    }
    return stars;
}


// function slideButton(){
//     <ArrowForwardIosOutlinedIcon/>
//     <ArrowBackIosNewOutlinedIcon/>

// }


function Cards({data, SectionName }) {

    return (
        <>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='text-2xl font-extrabold text-grey-800'>{SectionName}</h2>
                </div>
                <div className="flex flex-nowrap overflow-x-auto">
                    {data.map(item => (
                        <div key={item.id} className="relative m-10 flex-shrink-0 w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white">
                            <a className="relative mx-3 mt-3 items-center justify-center flex  overflow-hidden rounded-xl " href="#">
                                <img className="object-cover object-top text-center h-60" src={item.image} alt="product image" />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-gray-600 p-1 px-2 text-center text-sm font-medium text-white">{item.discount_percentage} OFF</span>
                            </a>

                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900 overflow-hidden whitespace-nowrap">{item.title}</h5>
                                </a>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-2xl font-bold text-slate-900 p-2">{item.discounted_price.toString().slice(0, 4)}</span>
                                        <span className="text text-slate-900 line-through">{item.price.toString().slice(0, 4)}</span>
                                    </p>
                                    <div className="flex items-center">
                                        {generateStars(item.rating)}
                                        <span className="mr-2 ml-3 rounded bg-yellow-400 px-2.5 py-0.5 text-xs font-semibold text-gray-900">{item.rating}</span>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center justify-center rounded-md bg-pink-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <ShoppingCartOutlinedIcon />
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    );
}

export default Cards;
