const productsData = [

{
id: "pomegranates",
title: "Pomegranates",
category: "fruits",
description: "Premium export quality pomegranates rich in antioxidants.",
images: [
"/assets/products/pomegranates/pomegranates1.jpg",
"/assets/products/pomegranates/pomegranates3.jpg",
"/assets/products/pomegranates/pomegranates1.jpg"
],
specs:{
grade:"Premium Export Grade",
packing:"3kg / 5kg Cartons",
shelf:"45-60 Days",
moq:"1 Container",
storage:"Cold Storage",
shipping:"Sea & Air Freight"
}
},

{
id:"onions",
title:"Onions",
category:"vegetables",
description:"High-quality onions with long shelf life.",
images:[
"/assets/products/onions/onions1.jpg",
"/assets/products/onions/onions2.jpg"
],
specs:{
grade:"A Grade",
packing:"10kg / 25kg Mesh Bags",
shelf:"60-90 Days",
moq:"5 Tons",
storage:"Dry Ventilated Storage",
shipping:"Container Export"
}
},

{
id:"garlic",
title:"Garlic",
category:"vegetables",
description:"Fresh Indian garlic with strong flavor.",
images:[
"/assets/products/garlic/garlic1.jpg",
"/assets/products/garlic/garlic2.jpg"
],
specs:{
grade:"Farm Fresh Premium",
packing:"5kg / 10kg Bags",
shelf:"4-6 Months",
moq:"2 Tons",
storage:"Cool Dry Storage",
shipping:"Sea Export"
}
},

{
id:"greenchilli",
title:"Chilli",
category:"spices",
description:"Premium export quality red chillies.",
images:[
"/assets/products/mirchi/mirchi1.jpg",
"/assets/products/mirchi/mirchi2.jpg"
],
specs:{
grade:"Premium Dried Grade",
packing:"25kg PP Bags",
shelf:"12 Months",
moq:"1 Ton",
storage:"Dry Storage",
shipping:"Bulk Export"
}
},

{
id:"pepper",
title:"Black Pepper",
category:"spices",
description:"Premium Indian black pepper.",
images:[
"/assets/products/pepper/pepper1.jpg",
"/assets/products/pepper/pepper2.jpg"
],
specs:{
grade:"Export Premium",
packing:"25kg Export Bags",
shelf:"12-18 Months",
moq:"1 Ton",
storage:"Dry Cool Storage",
shipping:"Global Export"
}
},

{
id:"lemons",
title:"Lemons",
category:"fruits",
description:"Fresh lemons with high juice content.",
images:[
"/assets/products/lemons/lemons1.jpg",
"/assets/products/lemons/lemons2.jpg",
"/assets/products/lemons/lemons3.jpg"
],
specs:{
grade:"Fresh Export Grade",
packing:"8kg / 10kg Boxes",
shelf:"30-45 Days",
moq:"1 Container",
storage:"Cold Storage",
shipping:"Air & Sea"
}
},

{
id:"coconut",
title:"Coconut",
category:"fruits",  // ✅ THIS IS YOUR MAIN FIX
description:"Fresh export quality coconuts with high water and kernel content.",
images:[
"/assets/products/coconut/coconut1.jpg",
"/assets/products/coconut/coconut2.png",
"/assets/products/coconut/coconut3.png"
],
specs:{
grade:"Premium Export Grade",
packing:"25 / 50 pcs Bags",
shelf:"30-45 Days",
moq:"1 Container",
storage:"Cool Dry Storage",
shipping:"Sea Export"
}
},

{
id:"chicken",
title:"Chicken",
category:"meat",
description:"Fresh hygienic poultry products.",
images:[
"/assets/products/chicken/chicken1.jpg",
"/assets/products/chicken/chicken2.jpg"
],
specs:{
grade:"Processed Export Quality",
packing:"Frozen Bulk Packs",
shelf:"12 Months Frozen",
moq:"5 Tons",
storage:"Frozen Storage",
shipping:"Reefer Containers"
}
}

];

export default productsData;