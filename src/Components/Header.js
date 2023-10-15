import React, { useEffect, useState } from 'react'
import Profile from '../Images/profile-user.png'
import Menu from '../Images/menu.png'
import Logo from '../Images/logo.png'
import Search from '../Images/searchicon.png'
import { useDispatch } from 'react-redux'
import { changeVisible } from '../Utils/SideBarSlice'
import { YOUTUBE_AUTOSUGGEST_URL } from '../Constants/constants'
import { Link } from 'react-router-dom'

const Header = () => {

  const [searchText, setSearchText] = useState("");
  const [suggetions,setSuggetions]=useState([]);
  const [showSugggetion,setShowSugggetion] = useState(false);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(changeVisible());
  }

  useEffect(() => {
    const timer = setTimeout(() => fetchSuggestions(), 300);
    return () => {
      clearTimeout(timer);
    }
  }, [searchText]);

  const fetchSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTOSUGGEST_URL + searchText);
    const json = await data.json();
    console.log(json[1]);
    setSuggetions(json[1]);
  }

  return (
      <div className="grid grid-flow-col p-2 mr-10 ml-5">
        <div className="flex col-span-1 gap-5 justify-start flex-wrap content-center">
          <img src={Menu} onClick={() => { toggleMenu() }} className="w-8 h-6 cursor-pointer" alt='Menu icon' />
          <Link to='/' ><img src={Logo} className=" w-18 h-6" alt='Logo' /></Link>
        </div>
          <div className="col-span-10 flex justify-center">
            <div className="w-1/2 flex flex-col">
               <input type="text" placeholder="Search" className=" px-3 py-2 rounded-l-full w-full border border-gray-300"
              onChange={(e) => { setSearchText(e.target.value) }} 
              onFocus={()=>{setShowSugggetion(true)}}
              onBlur={()=>{setShowSugggetion(false)}}></input>
              {showSugggetion && <div className="fixed mt-[2.7rem] w-4/12 rounded-xl border border-gray-100 shadow-xl bg-white" >
              <ul className="text-start m-2">
                {
                  suggetions.map((suggestion,index)=>{
                    return  <li className="p-2 hover:bg-gray-200 rounded-md" key={index}> <img src={Search} className="w-4 h-4 inline-block mr-2" alt='search-icon'/>{suggestion}</li>
                  })
                }
              </ul>
            </div>}
            </div>
            
            <button className="border border-gray-300 rounded-r-full bg-gray-100"><img src={Search} className=" px-4 h-6 " alt='search logo' /></button>
          </div>

        <div className="col-span-1 flex gap-7 justify-end content-center flex-wrap">
          <div><svg height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg></div>
          <div ><svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg></div>
          <img src={Profile} className="w-7 h-7" alt='profile' />
        </div>

      </div>

  )
}

export default Header