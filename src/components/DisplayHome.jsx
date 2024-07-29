import React from 'react';
import Navbar from "./Navbar.jsx";
import {albumsData, songsData} from "../assets/assets";
import AlbumItem from "./AlbumItem.jsx";
import SongItem from "./SongItem.jsx";


const DisplayHome = () => {
    return (
        <>
            <Navbar/>
            <div className="my-4">
                <h1 className="m-5 font-bold text-2x1">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
                </div>
            </div>
            <div className="my-4">
                <h1 className="m-5 font-bold text-2x1">Today's biggest hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
                </div>
            </div>
        </>
    )
}
export default DisplayHome;