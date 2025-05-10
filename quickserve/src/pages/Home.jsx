import React from 'react'
import Home1 from '../assets/home1.png'
import Home2Elect from '../assets/Home2Elect.png'
import Home3 from '../assets/home3.png'
import electronics from '../assets/CategoryImages/electronics.png'
import bread from '../assets/CategoryImages/bread.png'
import care from '../assets/CategoryImages/care.png'
import chips from '../assets/CategoryImages/chips.png'
import daily from '../assets/CategoryImages/daily.png'
import frozen from '../assets/CategoryImages/frozen.png'
import meat from '../assets/CategoryImages/meat.png'
import veges from '../assets/CategoryImages/veges.png'
import { useNavigate } from 'react-router-dom'
import { formatCategoryName } from '../utils/formatPrice'

export const categories = [
    {
      id: 1,
      name: "Fruits & Vegetables",
      image: veges
    },
    {
      id: 2,
      name: "Dairy & Bakery",
      image: bread
    },
    {
      id: 3,
      name: "Snacks & Beverages",
      image: chips
    },
    {
      id: 4,
      name: "Instant & Frozen Foods",
      image: frozen
    },
    {
      id: 5,
      name: "Personal Care",
      image: care
    },
    {
      id: 6,
      name: "Household Essentials",
      image: daily
    },
    {
      id: 7,
      name: "Electronics and Appliances",
      image: electronics
    },
    {
      id: 8,
      name: "Meat & Seafood",
      image: meat
    }
  ];
  
export default function Home({children}) {

const navigate = useNavigate()

  const handleCategoery =(category) => {
    const categoryName = formatCategoryName(category)
 navigate(`/category/${categoryName}`)
  }

  return (
   <>
   <main className='flex-grow' >{children}</main>
   {/* banner 1 */}
<div className='w-[100%] overflow-hidden '>
<img className='w-full h-auto object-cover block'
 src={Home1} alt="image" />
</div>

{/* categories */}
<div
className=' w-[98%] flex flex-wrap justify-between mt-10 ml-4 mb-10 rounded-2xl ring-2 ring-[#15616d7a] shadow-xl '>

{categories.map((cat) => (
  <div onClick={()=>(handleCategoery(cat.name))} key={cat.id} className="w-[150px] text-center p-5">
    <img src={cat.image} alt={cat.name} className="w-full h-24 object-contain" />
    <p className="mt-4 text-xl font-medium">{cat.name}</p>
  </div>
))}

</div>

{/* banner2 */}
<div className='w-screen  bg-gradient-to-r from-[#2a9d8f] to-white flex justify-end items-center'>

<div className='w-fit h-fit'>
<p 
className='text-7xl font-bold text-white mr-60  '
>Electronics <br/> At Great Price </p>
</div>

<img
className='object-content  block  ' 
src={Home2Elect} alt="banner" />

</div>

{/* banner3 */}
<div className='w-screen rounded-xl bg-gradient-to-l from-[#9e0059] to-white mr-50 flex justify-start items-center '>

<img
className='object-content  block mr-40 ' 
src={Home3} alt="banner" />

<div className='w-fit h-fit'>
<p 
className='text-7xl font-bold text-white ml-25 '
>Beauty <br/>  Products sale </p>
</div>

</div>





   </>
  )
}
