import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    let search = "marvel"
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=21')
    .then(res => setBookData(res.data.items))
    .catch(err=>console.log(err))

  }, [])
  console.log(bookData)
  return (
    <div className="grid gap-4 grid-cols-7">
      {bookData.map(book => (
        <div className="w-full hover:scale-110 duration-300" key={book.id}>
          <div className="w-full rounded-md overflow-hidden aspect-[3/4] bg-black shadow-md">  
            <img className="object-cover w-full object-right h-full" src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
          </div>
          <div className="flex mt-4 flex-col">
            <i className="text-xs font-semibold mb-2">{book.volumeInfo.categories}</i>
            <p className="">{book.volumeInfo.authors}</p>
            <b className="">{book.volumeInfo.title}</b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
