import React, { useContext, useState } from "react";
import { UserContextApi } from "../context/UserContext";
import { useISADMIN } from "../hooks/IsAdminHook";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../firebase/firebaseConfig"
function Admin() {

  const [SampleImage, setSampleImage] = useState(null)
  console.log(SampleImage)


  const { currentUser } = useContext(UserContextApi)
  const { isAdmin } = useISADMIN(currentUser)
  // console.log(isAdmin)

  const AddProduct = (e) => {
    e.preventDefault()
    console.log(e)
    let title = e.target[0].value
    let price = Number(e.target[1].value)
    let stock = Number(e.target[2].value)
    let desc = e.target[3].value
    let content = e.target[4].value
    let category = e.target[5].value
    let image = e.target[7].files[0]
    let sale = Number(e.target[8].value)
    console.log(title)
    console.log(price)
    console.log(stock)
    console.log(desc)
    console.log(content)
    console.log(category)
    console.log(image)
    console.log(sale)


    const storageRef = ref(storage, title);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData(downloadURL)
        });
      }
    );

    const setData = async (argument) => {
      await addDoc(collection(db, "products"), {
        title,
        price,
        stock,
        desc,
        content,
        category,
        image: argument,
        sale,
        date: serverTimestamp()
      });
    }




  }

  let stl = {
    size: "w-full h-[100vh]",
    container: "mx-auto w-[90%] h-[85vh] mt-[20px] flex justify-between",
    left: "w-[49%] h-full flex flex-col justify-between",
    title: "w-full h-[45px] border border-black indent-2",
    quantity: "w-full h-fit flex justify-between",
    price: "w-[48%]  mt-[15px]",
    input_price_stock: "indent-2 mt-[10px] w-full h-[45px] border border-black",
    textArea: "indent-2 w-full border border-black",
    all: "w-full h-[40px] border border-black indent-2 rounded-4",
    btn: "w-[140px] h-[40px] text-[18px] rounded-[7px] text-white font-semibold bg-gradient-to-r from-[#E66346] to-[#98508E]",

    right: "w-[49%] h-full flex flex-col",
  };
  return (
    < div className={stl.size} >
      {
        isAdmin ?
          <form className={stl.container} onSubmit={AddProduct}>
            <div className={stl.left} >
              <input type="text" placeholder="Title" className={stl.title} />
              <div className={stl.quantity}>
                <div className={stl.price}>
                  <label htmlFor="price">Price</label>
                  <input type="number" className={stl.input_price_stock} />
                </div>

                <div className={stl.price}>
                  <label htmlFor="In_Stock">In Stock</label>
                  <input type="number" className={stl.input_price_stock} />
                </div>
              </div>

              <textarea
                cols="30"
                rows="5"
                placeholder="Description"
                className={stl.textArea}
              ></textarea>

              <textarea
                cols="30"
                rows="8"
                placeholder="Content"
                className={stl.textArea}
              ></textarea>

              <select name="" id="" className={stl.all}>
                <option value="all">All</option>
                <option value="phone">Phone</option>
                <option value="notebook">Notebook</option>
              </select>

              <button className={stl.btn}>Create</button>
            </div>

            <div className={stl.right}>
              <label htmlFor="files" className="w-full h-[45px] border border-black ">
                <div className="w-[100px] bg-gray-100 h-full flex justify-center items-center">
                  Upload
                </div>
              </label>

              <input id="files" onChange={(e) => setSampleImage(URL.createObjectURL(e.target.files[0]))}  className="" type="file"/>


              <img src={SampleImage} alt="" className="border-black border-[3px] w-[300px] h-[300px] object-cover" />
              <div className={stl.price}>
                <label htmlFor="price">Sale</label>
                <input
                  type="text"
                  placeholder="sale product"
                  className={stl.input_price_stock}
                />
              </div>
            </div>
          </form>
          : <h1> Siz admin emassiz</h1>
      }


    </div >
  );
}

export default Admin;
