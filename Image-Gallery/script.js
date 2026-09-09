// Sabhi verified UHD Images ka array (8 Categories x 21 images each)
const imagesData = [
    // --- NATURE Images ---
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Yosemite Mountain Valley' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Foggy Forest Landscape' },
    { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Emerald Mountain Lake' },
    { src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Autumn Forest Trees' },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Golden Field Sunset' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Alpine Lake Reflections' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Wilderness Mountain Trail' },
    { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Cascading Waterfall Bridge' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Tropical Beach Paradise' },
    { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Starry Sky Over Peaks' },
    { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Snow Covered Mountains' },
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Sunset Coastal Waves' },
    { src: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Misty River Valley' },
    { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Wildflower Meadow' },
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Deep Ocean Blue Waves' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Sunlight Through Forest' },
    { src: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Serene Countryside Hills' },
    { src: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Green Mountain Peak' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW7FRR3iANBtsIO7kP3LMhj7VhAQamS1P6_e9jT1GNg&s=10', category: 'nature', title: 'Dense Pine Trees' },
    { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1000&auto=format&fit=crop&q=80', category: 'nature', title: 'Lush Green Canopy' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxsFJWxr_fO6Ty8MHdOnDaLdGtFdqH5tB-WJjcvOK6g&s', category: 'nature', title: 'Yellow Pine Trees' },

    // --- ARCHITECTURE Images ---
    { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Modern Living Interior' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Glass Modern Skyscraper' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Luxury Villa Exterior' },
    { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Geometric Building Facade' },
    { src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Classic European Street' },
    { src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Futuristic Tower Glow' },
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Spiral Architecture Design' },
    { src: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Metropolis Night Lights' },
    { src: 'https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Suspension Bridge Lights' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLwawy-reZzTIdlisNzGhWXj-rgFka0VjZRHLctR0MA&s=10', category: 'architecture', title: 'Steel & Glass Structure' },
    { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Minimalist Interior Space' },
    { src: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Gothic Cathedral Arches' },
    { src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Modern Spiral Staircase' },
    { src: 'https://images.pexels.com/photos/27584011/pexels-photo-27584011/free-photo-of-a-gallery-with-framed-art-on-the-wall.jpeg?cs=tinysrgb&dpr=1&w=500', category: 'architecture', title: 'Contemporary Art Museum' },
    { src: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Urban Highrise Towers' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TF8kM9q0hpBzUk-o0mIObhtMguZPjnK_9DvP9dobaQ&s=10', category: 'architecture', title: 'Urban River Bridge View' },
    { src: 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Historic Stone Castle' },
    { src: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Modern Waterfront House' },
    { src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Classic Clock Tower' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80', category: 'architecture', title: 'Modern Corporate Building' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJ511ATo9e2h0GKs_bfUPsLw5fK3aEgiGYAgN86CmYQ&s=10', category: 'architecture', title: 'Bridge Over a River' },


    // --- ANIMALS Images ---
    { src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Majestic African Lion' },
    { src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Ocean Turtle Swimming' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFqvV9qOZhLb6-xRN1zpzvmIyPioIkI6bjfJfVPOvWbA4ZkyLKq5Mu5s&s=10', category: 'animals', title: 'Giant Panda Eating Bamboo' },
    { src: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Wild Bengal Tiger' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbzyR_9dm5PUDRQTXFzjvvOfOLqrM-E7A-HkbBZK28Q&s=10', category: 'animals', title: 'Cute Red Panda' },
    { src: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Vibrant Tropical Macaw' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesY2ZSRNsUtBgEaeAI1YL8HqNXEVZCyLaC93OiVNXxw&s=10', category: 'animals', title: 'Wild African Elephant' },
    { src: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Dolphin Jumping Wave' },
    { src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Leopard Resting on Tree' },
    { src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Wild Red Fox' },
    { src: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Eagle Soaring Sky' },
    { src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Golden Retriever Pup' },
    { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Playful Pug Dog' },
    { src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Fluffy House Cat' },
    { src: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Hummingbird Flying' },
    { src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Wild Deer in Forest' },
    { src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Cute Siberian Husky' },
    { src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Tall Savannah Giraffe' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BPSvNZznMdUuN7Sy_AwBXUwzJF3dKSgjSqshgt9wuA&s=10', category: 'animals', title: 'Toucan Colorful Bird' },
    { src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=1000&auto=format&fit=crop&q=80', category: 'animals', title: 'Grey Kitten' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVenPBZSe0mu6FiJ5o8FF2HNuj8ypC61Q8CxQw5TWH5Q&s=10', category: 'animals', title: 'Owl' },

    // --- TRAVEL (20 Images) ---
    { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Airplane Above Clouds' },
    { src: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Backpacker Mountain Top' },
    { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Eiffel Tower Paris' },
    { src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Venice Canal Gondola' },
    { src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Louvre Pyramid Night' },
    { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Cinque Terre Cliff Coast' },
    { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Santorini White Houses' },
    { src: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Sydney Opera House View' },
    { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Dubai Skyline Burj Khalifa' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIZ7oE_ZHvd53Df5-LvG6MWli2B4Xd06QfSzavwVcug&s=10', category: 'travel', title: 'Japan Mt Fuji Cherry Blossom' },
    { src: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Hot Air Balloons Cappadocia' },
    { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Maldives Overwater Bungalow' },
    { src: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Milkyway Camping Night' },
    { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Desert Roadtrip Highway' },
    { src: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Traveler Exploring Map' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Golden Hour Ocean Beach' },
    { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Tropical Palm Island' },
    { src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1000&auto=format&fit=crop&q=80', category: 'travel', title: 'Passport & Travel Accessories' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVem60K1vpwrrcg2IglCj-7NF9nnDINbVnru-__QJBg&s=10', category: 'travel', title: 'Boat on Crystal Lake' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR4IzEvX8M7z06MfKfFpeHIXQkkz81BMrmpLum1sKPg&s=10', category: 'travel', title: 'Mountain Peak Explorer' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbq8SHH8ZY3m3xY1YoqHED3B5230dhvVi5m96DYwF-g&s=10', category: 'travel', title: 'Epic Skydiving' },

    // --- CARS  Images ---
    { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Porsche Sports Car' },
    { src: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Classic Red Vintage Car' },
    { src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Chevrolet Corvette Stingray' },
    { src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Lamborghini Huracan' },
    { src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Ferrari F8 Tributo' },
    { src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Audi R8 V10 Coupe' },
    { src: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'BMW M3 Competition' },
    { src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Mercedes AMG GT R' },
    { src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Ford Mustang Shelby GT500' },
    { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'McLaren 720S Spider' },
    { src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Nissan GT-R Nismo' },
    { src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Aston Martin Vantage' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5dFPeR1bYUGT7f1xhlM-QURJDs7TCUwtrBplSAiQrA&s=10', category: 'cars', title: 'Subaru Impreza WRX STI' },
    { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'BMW M4 Coupe' },
    { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Classic American Muscle' },
    { src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Yellow Supercar Track Edition' },
    { src: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Mustang Convertible Cruise' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD3xYVlEEACmerbD9q7CT03c7bFegfWKBuP_4b8Uo7g&s=10', category: 'cars', title: 'Lexus LC 500 Sport' },
    { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000&auto=format&fit=crop&q=80', category: 'cars', title: 'Offroad Beast Truck' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpxjbi9sS3tQJkrcUsI-Sd-HojXCRCaO2Dosqb2iEAg&s=10', category: 'cars', title: 'Porsche 911 Turbo S' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXImB-puQ_ygMb83lY1P9bVTjBl0kC_XW4vzySghl9w&s=10', category: 'cars', title: 'Mansory Rolls Royce'},

    // --- BIKES Images ---
    { src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Superbike Racing Edition' },
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Matte Black Sportbike' },
    { src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Cruiser Highway Motorcycle' },
    { src: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Vintage Harley Davidson' },
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Ducati Panigale V4' },
    { src: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Yamaha YZF-R1' },
    { src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Kawasaki Ninja H2R' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2N47xu5kkrSx8QobYRg7ZdiApv77QWodsF_C54B9Zg&s=10', category: 'bikes', title: 'Offroad Motocross Bike' },
    { src: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Custom Chopper Roadster' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2FH6yelN10slPyllllA11N_4tsMlLWfVmmFHTF5TAA&s=10', category: 'bikes', title: 'BMW S1000RR Superbike' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFWAhYRj8YhcNwq5PM_6NgXaUhKIup6B9fvKpihx3SQ&s=10', category: 'bikes', title: 'KTM Super Duke R' },
    { src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Classic Cafe Racer' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkq_8_bU0gTaFUGo5AbOUbVNEal8sf0ayDNz_HA0oGQ&s=10', category: 'bikes', title: 'Royal Enfield Interceptor' },
    { src: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Red Racing Motorcycle' },
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Naked Streetfighter Bike' },
    { src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Track Edition Superbike' },
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Black Stealth Roadster' },
    { src: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Retro Heritage Chopper' },
    { src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Neon Night Superbike' },
    { src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000&auto=format&fit=crop&q=80', category: 'bikes', title: 'Classic V-Twin Cruiser' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDsRiad6qjY60PxA2YfJ6tSF4xsSHIBf0pvhAhwII0w&s=10', category: 'bikes', title: 'Yamaha R14 v3 Dual' },

    // --- ANIME Images ---
    { src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Cyberpunk Anime City' },
    { src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Japanese Manga Artwork' },
    { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Abstract Anime Aesthetic' },
    { src: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Anime Neon Alley Glow' },
    { src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Anime Fantasy Night Sky' },
    { src: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Tokyo Neon Anime City' },
    { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Cherry Blossom Temple Realm' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6Rv7sJzGE_ebgvXw0m5yvVWy-1lnGkxcnFKgJX4u7A&s=10', category: 'anime', title: 'Fantasy Anime World' },
    { src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Vibrant Anime Illustration' },
    { src: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Futuristic Anime Cityscape' },
    { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Gaming Setup Anime Glow' },
    { src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Neon Cyberpunk Artwork' },
    { src: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Fantasy Sky Realm' },
    { src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Retro Japanese Sketch' },
    { src: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Synthwave Anime Skyline' },
    { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Mystical Japanese Shrine' },
    { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Vibrant Color Spectrum' },
    { src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Cyber Horizon Anime' },
    { src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Starry Sky Anime Realm' },
    { src: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1000&auto=format&fit=crop&q=80', category: 'anime', title: 'Neon Anime Alleyway' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mywtWizCi-zXQ24VDl8BMSj59hNLIpv3K1VMIVtGxg&s=10', category: 'anime', title: 'Fantasy World Full Moon Mountain' },

];

// DOM elements selection
const galleryGrid = document.getElementById('galleryGrid');
const tabBtns = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('searchInput');

const lightbox = document.getElementById('lightbox');
const lightboxDialog = document.getElementById('lightboxDialog');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCategory = document.getElementById('lightboxCategory');

const closeBtn = document.getElementById('closeBtn');
const backBtn = document.getElementById('backBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fullscreenExitBtn = document.getElementById('fullscreenExitBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Theme Switcher elements
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

let currentIndex = 0;
let currentVisibleItems = [];
let currentCategory = 'all';
let currentSearchQuery = '';

// Theme preference check aur set karne ki script
const savedTheme = localStorage.getItem('galleryTheme') || 'dark';

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
} else {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark';
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
        localStorage.setItem('galleryTheme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
        localStorage.setItem('galleryTheme', 'light');
    }
});

// Dynamic Gallery Render Function (Uniform Dimensions to Guarantee 0 Gaps!)
function renderGallery() {
    galleryGrid.innerHTML = '';
    currentVisibleItems = [];

    let count = 0;
    imagesData.forEach((item) => {
        const matchesCategory = (currentCategory === 'all' || item.category === currentCategory);
        const matchesSearch = currentSearchQuery === '' || 
                              item.title.toLowerCase().includes(currentSearchQuery) || 
                              item.category.toLowerCase().includes(currentSearchQuery);

        if (matchesCategory && matchesSearch) {
            const card = document.createElement('div');
            card.classList.add('gallery-card');

            const delay = Math.min(count * 0.025, 0.4);
            card.style.animation = `cardFadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s forwards`;
            card.style.opacity = '0';

            card.innerHTML = `
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="card-overlay">
                    <span class="card-tag">${item.category}</span>
                    <h3 class="card-title">${item.title}</h3>
                </div>
            `;

            // Step 1 Click: Open Lightbox Modal View
            card.addEventListener('click', () => {
                const itemIndex = currentVisibleItems.indexOf(item);
                openLightbox(itemIndex);
            });

            galleryGrid.appendChild(card);
            currentVisibleItems.push(item);
            count++;
        }
    });

    if (currentVisibleItems.length === 0) {
        galleryGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                <p style="font-size: 1.2rem; font-weight: 500;">No images found matching "${currentSearchQuery}"</p>
                <p style="font-size: 0.9rem; margin-top: 6px;">Try searching with another keyword like 'Cars', 'Bikes', 'Anime', or 'Tiger'.</p>
            </div>
        `;
    }
}

// Real-time Search Input Listener
searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    renderGallery();
});

// Lightbox modal view handle karne ki script (Step 1 Click)
function openLightbox(index) {
    if (index < 0 || index >= currentVisibleItems.length) return;
    
    currentIndex = index;
    const currentItem = currentVisibleItems[currentIndex];

    lightboxImg.src = currentItem.src;
    lightboxCaption.textContent = currentItem.title;
    lightboxCategory.textContent = currentItem.category.toUpperCase();
    
    exitFullscreenMode();
    lightbox.classList.add('active');
}

// Fullscreen Mode Handler (Step 2 Click - Triggers CSS & Native Fullscreen API)
function toggleFullscreenMode() {
    if (lightboxDialog.classList.contains('is-fullscreen')) {
        exitFullscreenMode();
    } else {
        enterFullscreenMode();
    }
}

function enterFullscreenMode() {
    lightboxDialog.classList.add('is-fullscreen');
    fullscreenExitBtn.style.display = 'flex';
    
    if (lightboxDialog.requestFullscreen) {
        lightboxDialog.requestFullscreen().catch(() => {});
    }
}

function exitFullscreenMode() {
    lightboxDialog.classList.remove('is-fullscreen');
    fullscreenExitBtn.style.display = 'none';

    if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
    }
}

// Lightbox close karne ka function (Back button & Close X)
function closeLightbox() {
    exitFullscreenMode();
    lightbox.classList.remove('active');
}

// Direct Image Download Trigger Function
function downloadCurrentImage() {
    if (!currentVisibleItems[currentIndex]) return;
    
    const currentItem = currentVisibleItems[currentIndex];
    const imageSrc = currentItem.src;
    const fileName = `${currentItem.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;

    fetch(imageSrc)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
        })
        .catch(() => {
            window.open(imageSrc, '_blank');
        });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % currentVisibleItems.length;
    openLightbox(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + currentVisibleItems.length) % currentVisibleItems.length;
    openLightbox(currentIndex);
}

// Step 2 Click Event: Clicking image inside Lightbox toggles 2-Step Fullscreen Mode!
lightboxImg.addEventListener('click', toggleFullscreenMode);
fullscreenExitBtn.addEventListener('click', exitFullscreenMode);

// Event Listeners setup
closeBtn.addEventListener('click', closeLightbox);
backBtn.addEventListener('click', closeLightbox);
downloadBtn.addEventListener('click', downloadCurrentImage);

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
        if (lightboxDialog.classList.contains('is-fullscreen')) {
            exitFullscreenMode();
        } else {
            closeLightbox();
        }
    }
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

// Tab buttons click listener
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentCategory = btn.dataset.filter;
        renderGallery();
    });
});

// Initial Load
renderGallery();
