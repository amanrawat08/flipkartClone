
const PageCategory = () => {
    const category = [
        {
            "id": 1,
            "title": "Cameras",
            "image": "electronic/dslr.webp",
            "cta": "Shop Now",
            "priceText": "From ₹1299",
            "brands": ["Canon", "Sony", "Fujifilm"]
        },
        {
            "id": 2,
            "title": "Straighteners",
            "image": "electronic/straightner.webp",
            "cta": "",
            "priceText": "From ₹599",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 3,
            "title": "Shavers",
            "image": "electronic/shaver.webp",
            "cta": "",
            "priceText": "From ₹1,649",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 4,
            "title": "Printers",
            "image": "electronic/printer.webp",
            "cta": "",
            "priceText": "From ₹10,999",
            "brands": ["Epson"]
        },
        {
            "id": 5,
            "title": "Hair Dryers",
            "image": "electronic/dryer.webp",
            "cta": "",
            "priceText": "From ₹549",
            "brands": ["Realme", "Philips"]
        },
        {
            "id": 6,
            "title": "Straighteners",
            "image": "electronic/straightner.webp",
            "cta": "",
            "priceText": "From ₹599",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 7,
            "title": "Shavers",
            "image": "electronic/shaver.webp",
            "cta": "",
            "priceText": "From ₹1,649",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 8,
            "title": "Printers",
            "image": "electronic/printer.webp",
            "cta": "",
            "priceText": "From ₹10,999",
            "brands": ["Epson"]
        },
    ]
    return (
        <section>
            <div className=" mx-2 px-2 py-2 my-2  rounded-sm">
                <div className="flex flex-wrap gap-3">
                    {
                        category.map((data , index) => {
                            return <div className="flex-col text-center">
                                <img src={`./electronic/${index+1}.jpg`} className="w-24" alt="" />
                                <div className="font-medium text-sm">
                                    {data.title}
                                </div>
                            </div>
                        })
                    }
                    {
                        category.map((data , index) => {
                            return <div className="flex-col text-center">
                                <img src={`./electronic/${index+1}.jpg`} className="w-24" alt="" />
                                <div className="font-medium text-sm">
                                    {data.title}
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default PageCategory
