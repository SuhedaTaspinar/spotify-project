import React from 'react';
import Navbar from "./Navbar.jsx";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem.jsx";

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className="my-5 font-bold text-2x1">
                {albumsData.map((item, index) => (
                    <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} /> // Parametreleri doğru sırada gönderiyoruz
                ))}
            </div>
        </>
    )
}
export default DisplayHome;