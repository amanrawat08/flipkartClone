import React from 'react'

const BottomHeader = () => {
    const fakeData = [
        
        {
            "id": 2,
            "name": "Fashion",
            "icon": "fashion.png",
            "slug": "fashion"
        },
        {
            "id": 3,
            "name": "Mobiles",
            "icon": "mobiles.png",
            "slug": "mobiles"
        },
        {
            "id": 4,
            "name": "Beauty",
            "icon": "beauty.png",
            "slug": "beauty"
        },
        {
            "id": 5,
            "name": "Electronics",
            "icon": "electronics.png",
            "slug": "electronics"
        },
        {
            "id": 6,
            "name": "Home",
            "icon": "home.png",
            "slug": "home"
        },
        {
            "id": 7,
            "name": "Appliances",
            "icon": "appliances.png",
            "slug": "appliances"
        },
        {
            "id": 8,
            "name": "Toys & Baby",
            "icon": "toys.png",
            "slug": "toys-baby"
        },
        {
            "id": 9,
            "name": "Food & Health",
            "icon": "food.png",
            "slug": "food-health"
        },
        {
            "id": 10,
            "name": "Auto Accessories",
            "icon": "auto.png",
            "slug": "auto-accessories"
        },
        {
            "id": 11,
            "name": "2 Wheelers",
            "icon": "two-wheelers.png",
            "slug": "two-wheelers"
        },
        {
            "id": 12,
            "name": "Sports & Fitness",
            "icon": "sports.png",
            "slug": "sports-fitness"
        },
        {
            "id": 13,
            "name": "Books & More",
            "icon": "books.png",
            "slug": "books-more"
        },
        {
            "id": 14,
            "name": "Furniture",
            "icon": "furniture.png",
            "slug": "furniture"
        }
    ]
    return (
        <div className='w-full px-8 py-2 border-b-2 border-gray-100'>
            <div className='flex items-center gap-2 justify-between text-sm font-medium'>
                {
                    fakeData.map((data)=>{
                    return <div key={data.id} className='cursor-pointer flex-col text-center  m-auto justify-center'>
                        <img src="fashion.svg" className='m-auto' alt="" />
                        <div>
                            {data.name}
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    )
}

export default BottomHeader
