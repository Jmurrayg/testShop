import React,{useState} from 'react';
import Nav from './navBar';
import { Icon } from '@iconify/react';
import arrowLeftAlt2 from '@iconify-icons/dashicons/arrow-left-alt2';
import arrowRightAlt2 from '@iconify-icons/dashicons/arrow-right-alt2';
import searchPlus from '@iconify-icons/fa-solid/search-plus';

function Item()  {
    const colorsList = [
    
        {
            "name": "Rose Gold/Diamond",
            "picture": "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            "name": "White Gold/Dimond",
            "picture":  "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            "name": "Gold/Dimond",
            "picture": "https://images.unsplash.com/photo-1561812350-932aed735105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
        }
    
    ]
    const [item,setItem] = useState(1);
    const [pic, setPic] = useState(colorsList[0].picture)
    

   
    const changePic = (element) =>{
        const newPic = element.target.value
        // eslint-disable-next-line array-callback-return
        colorsList.map((e) => {
            if(e.name === newPic){
                return setPic(e.picture)
            }
        }
        )
    }

    return(
        <>
        <Nav/>
        <container className=" md:flex md:mt-5">
        <div className="bg-white xl:w-1/2 md:w-2/3 h-full relative xl:ml-10">
            <img src={pic} alt="jewelery" className="w-full" />            
            <div className="absolute flex top-4 translate-x-1/2 translate-y-1/2 w-full">
            <button type="button" className="bg-black text-white rounded-full h-10 w-10 ml-2"><Icon icon={arrowLeftAlt2} width="20px" className="ml-2.5"/></button>
            <button type="button" className="bg-black ml-5 text-white rounded-full h-10 w-10"><Icon icon={arrowRightAlt2} width="20px" className="ml-2.5" /></button>
            <button type="button" className="bg-black float-right text-white rounded-full absolute ml-ft md:ml-fr h-10 w-10"><Icon icon={searchPlus} width="20px" className="ml-2.5"/></button>
            </div>
        </div>

        
        <div className="bg-white md:w-1/2 ml-8 mr-10 h-auto">
            <p className="text-center xl:text-3xl text-2xl md:text-left">DIAMOND TRIPEL THREAD & AND ILLUSION RIPPLE BRACELET</p>
            <p className="text-lg my-9 text-center md:text-left">$12,900</p>
            <div className="xl:grid xl:grid-cols-4 space-y-4 items-center">
                <p className="font-bold">Color</p>
                <select className="border w-full xl:col-span-2 bg-gray-200 text-xl" onChange={(e) => 
                    changePic(e)
                    }>
                    <option>Rose Gold/Diamond</option>
                    <option>White Gold/Dimond</option>
                    <option>Gold/Dimond</option>
                </select>
            </div>
            <div className="xl:grid xl:grid-cols-4 space-y-4 items-center">
                <p className="mt-4 font-bold">Size</p>
                <select className="border bg-gray-200 text-xl w-full xl:col-span-2">
                    <option>6</option>
                    <option>5</option>
                    <option>4</option>
                </select>
            </div>
                <div>
                    <p className="my-4 md:text-left text-center font-semibold">Quantity</p>
                        <div className="flex justify-center md:inline ">
                            <button className="border text-center w-10 h-10 font-black" type="button" onClick={() => 
                                item === 1
                                ?alert("No puedes agregar cero items")
                                :setItem(item - 1)
                                }>-</button>
                            <input className="w-10 text-center border h-10 font-black" type="text" value={item}/>
                            <button className="border w-10 text-center h-10 font-black" type="button" onClick={() => setItem(item + 1)}>+</button>
                        </div>
                </div>
                <div className="space-y-4 mt-5 mx-5 ">
                    <button className="block h-12 bg-black text-white w-full xl:w-2/5 text-center">Add to Cart</button>
                    <button className="block h-12 bg-yellow-300 w-full xl:w-2/5 text-center my-5">Buy with AMAZON pay</button>
                    <p className="cursor-pointer text-center md:text-left mb-4">More payment options</p>
                </div>
        </div>
        </container>
        </>
    )

} 
export default Item;