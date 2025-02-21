const sampleListings=[
    {
        title: "Seaside Serenity Retreat",
        description: "Escape to this tranquil beachfront apartment, where ocean breezes and breathtaking sunsets await. Featuring a spacious living area, modern amenities, and a private balcony overlooking the sea, this retreat is perfect for families or couples looking to unwind. Just steps away from local shops, restaurants, and vibrant nightlife, you'll enjoy the best of both relaxation and convenience.",
        image:{url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/514754533.jpg?k=32f5931d2342ddbaa93bbadd05ba3bc06b8c45f19d49bc729635b746cc9de9a3&o=&hp=1",
            fileName:"listingImage"},
        price: 1499,
        location: "123 Coastal Road, Malibu, California",
        country: "USA"
    },
    {
        title: "Urban Oasis Loft",
        description: "Nestled in the heart of downtown, this stylish loft offers a blend of modern design and urban charm. Enjoy floor-to-ceiling windows, a fully equipped kitchen, and a rooftop pool with stunning city views. Steps from vibrant cafes, art galleries, and nightlife.",
        image:{url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/579360869.jpg?k=c56ae317bebe7676d5ca514b411037e72dc8c9931efb9f7ddeb7c00a4866a101&o=&hp=1",
            fileName:"listingImage"},
        
        price: 2500,
        location: "789 Metro Avenue, New York, NY",
        country:"USA"

    },
    {
        title: "Mountain View Hideaway",
        description: "Experience serenity in this cozy cabin with panoramic mountain views. Perfect for nature lovers, the property features a hot tub, fireplace, and hiking trails just outside your door. Ideal for a weekend escape.",
        image:{url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/402989531.jpg?k=8c9314bf3ca1ff35c5071bc750de1091458401af6d122a9546295a34a3387cca&o=&hp=1",
            fileName:"listingImage"},
        
        price: 1750,
        location: "456 Summit Lane, Aspen, Colorado",
        country:"USA"
    },
    {
        title: "Lakeside Paradise Chalet",
        description: "Relax in this charming chalet overlooking a serene lake. With a private dock, paddleboards, and a spacious deck for barbecues, this is the perfect spot for family vacations or romantic getaways.",
        image:{url:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201809201414327918-8e60e366c65c11e8b93c0a8f75160ef6.jpg",
            fileName:"listingImage"},
        
        price: 220,
        location: "101 Lakeside Drive, Lake Tahoe, California",
        country:"USA"
    },
    {
        title: "Mediterranean Villa Escape",
        description: "Bask in luxury at this sunlit villa, featuring a private pool, lush gardens, and stunning Mediterranean architecture. Minutes from the beach and local markets. Ideal for those seeking elegance and relaxation.",
        price: 400,
        image:{url:"https://a0.muscache.com/im/pictures/miso/Hosting-1273519195174830722/original/b21a1912-fadb-48f1-ac9b-5920309e75e4.jpeg?im_w=720&im_format=avif",
            fileName:"listingImage"},
        
        location: "25 Amalfi Road, Positano",
        country:"Italy"


    },
    {
        title: "Cozy Cottage by the Woods",
        description: "Unwind in this quaint cottage surrounded by lush forests. Enjoy a wood-burning stove, hammocks, and a quiet reading nook. Perfect for disconnecting and recharging in nature.",
        price: 120,
        image:{url:"https://pics.craiyon.com/2023-12-02/uteYXQFZSNSBDXXbWnRPgg.webp",
            fileName:"listingImage"},
        
        location: "12 Evergreen Trail, Vermont",
        country:"USA"


    },
    {
        title: "Beachfront Bliss Bungalow",
        description: "Wake up to the sound of waves in this beachfront bungalow. Featuring modern interiors, an outdoor shower, and a hammock by the shore, this is paradise for beach lovers.",
        price: 180,
        image:{url:"https://resort-de-palolem-403702.hotelsgoaonline.com/data/Pics/OriginalPhoto/16231/1623148/1623148421/canacona-pic-2.JPEG",
            fileName:"listingImage"},
        
        location: "7 Sunset Beach Road, Maui, Hawaii",
        country:"USA"  
    },
    {
        title: "Chic Downtown Studio",
        description: "This sleek and stylish studio is perfect for business travelers or solo adventurers. Located in the heart of the city, you'll be steps away from world-class dining and entertainment.",
        price: 140,
        image:{url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/292115635.jpg?k=3d5f1d285fddcf5df21c47daf16c7d74d8fd0ebe62c9460729954ebd5b2e5bc9&o=&hp=1",
            fileName:"listingImage"},
        

        location: "88 Center Street, Chicago, Illinois",
        country:"USA"
    },
    {
        title: "Rustic Farmhouse Retreat",
description: "Escape to the countryside in this charming farmhouse. Enjoy fresh air, organic gardens, and cozy evenings by the fireplace. Great for families or groups looking to reconnect with nature.",
price: 160,
image:{url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/521594782.jpg?k=7bf467e89a9f1e94a2c1516534f6fcc837ee1c91469dc05a7afbc353acc020bf&o=&hp=11",
    fileName:"listingImage"},

location: "50 Country Lane, Tuscany",
country:"Italy"
    },
    {
        title: "Skyline Penthouse Suite",
description: "Indulge in luxury at this penthouse suite with panoramic city views. Featuring a private rooftop terrace, hot tub, and gourmet kitchen, this is the ultimate urban retreat.",
price: 600,
image:{url:"https://img.freepik.com/premium-photo/lavish-penthouse-suite-overlooking-city-skyline-sunset_1079150-231009.jpg",
    fileName:"listingImage"},

location: "500 Tower Street, Dubai",
country:"UAE"
    },
    {
        title: "Historic City Apartment",
description: "Stay in this beautifully restored apartment in the heart of the historic district. With vintage decor, modern amenities, and walking distance to landmarks, this is perfect for history enthusiasts.",
price: 180,
image:{url:"https://media.istockphoto.com/id/1141793546/photo/exterior-view-of-old-apartment-buildings-in-the-soho-neighborhood-of-manhattan-in-new-york.jpg?s=612x612&w=0&k=20&c=xWwIyIqhjojTaeOzteHlWxedBUzOT3hD8TvfjVIQjS8=",
    fileName:"listingImage"},


location: "18 Old Town Road, Prague",
country:"Czech Republic"
    },
    {
        title: "Tropical Jungle Villa",
description: "Immerse yourself in nature at this exotic villa surrounded by lush jungle. Enjoy an infinity pool, open-air living spaces, and sounds of wildlife. A secluded paradise for adventurous travelers.",
price: 300,
image:{url:"https://earthlinesarchitects.com/wp-content/uploads/2021/10/4Mini-Wood-Villa-with-Plunge-Pool-and-Tropical-Gardens.jpg",
    fileName:"listingImage"},

location: "99 Green Way, Ubud, Bali",
country:"Indonesia"
    }
    
];

module.exports= {data:sampleListings};

