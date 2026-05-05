import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { addBookAPI } from '../../services/allAPI';

function UploadBook() {
    const [bookDetails,setBookDetails]= useState({
        title:"",author:"", pages:"",imageURL:"",price:"",discountPrice:"",abstract:"", publisher:"",language:"",isbn:"",category:"",uploadImages:[]
    })
    const [preview,SetPreview] = useState("")
    const [previewList,SetPreviewList] = useState([])//we upload 3 pictures so that we want state to hold it 


    console.log(bookDetails);

    const handleUploadBookImage = (e)=>{
        const imageFile = e.target.files[0]
        const uploadBookImageArray = bookDetails.uploadImages // dummy array created 
        uploadBookImageArray.push(imageFile)  //image pushed to array 
        setBookDetails({...bookDetails,uploadImages:uploadBookImageArray}) // set function il we cant update function by push on set 
        const url = URL.createObjectURL(imageFile)
        SetPreview(url)
        //preview list - dummy variable
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        SetPreviewList(demoPreviewList)
    }

    const resetForm = ()=>{
        setBookDetails({
             title:"",author:"", pages:"",imageURL:"",price:"",discountPrice:"",abstract:"", publisher:"",language:"",isbn:"",category:"",uploadImages:[]
        })
        SetPreview("")
        SetPreviewList([])
    }
    const handleAddBook = async ()=>{
        const {title,author,pages,imageURL,price,discountPrice,abstract, publisher,language,isbn,category,uploadImages,sellerMail} = bookDetails
        if(!title || !author|| !pages || !imageURL || !price || !discountPrice || !abstract || !publisher || !language || !isbn,!category || uploadImages.length==0 ){
            toast.info("Please Fill the form Completely")
        }else{
            //api call 
            const reqBody = new FormData()
            for (let key in bookDetails){
                if(key != "uploadImages"){
                    reqBody.append(key,bookDetails[key])
                }else{
                    bookDetails.uploadImages.forEach(imagefile=>{
                        reqBody.append("uploadImages",imagefile)
                    })
                }
            }
            const result = await addBookAPI(reqBody)
            console.log(result);
            if(result.status==200){
                toast.success("Book added Successfully....")
            }else if(result){
                toast.warning(result.response)
            }
            
        }
    }


    
    return (
        <div className='p-10 my-20 mx-5 bg-gray-200'>
            <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
                <div className='px-3'>
                    <div className='mb-3'>
                        <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" placeholder='Book Cover Page URL' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input  value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})} type="text" placeholder='Total pages' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} type='text' placeholder='Abstract' rows={'5'} className='w-full p-2 rounded bg-white'></textarea>
                    </div>

                </div>
                <div className='px-3'>
                    <div className='mb-3'>
                        <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})}type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className='mb-3'>
                        <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})}type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                    </div>
                    {/* upload book images */}
                    <div className="mb-3 flex justify-center items-center mt-10">
                        <label htmlFor="bookImages">
                            <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImages' hidden />
                            <img width={'200px'} height={'200px'} src={preview?preview:"https://thumbs.dreamstime.com/b/rounded-151669207.jpg"} alt="Book file not found" />
                        </label>

                    </div>
                    {/* preview uploaded images */}
                    {
                        preview &&
                        <div className="flex justify-center items-center mt-10">
                        { 
                        previewList?.map((imageURL,index)=>
                       ( <img className='mx-2' width={'70px'} height={'70px'} src={imageURL}  alt ="book image not found"/>))
                            
                            }
                        {
                            previewList.length<3 &&
                            <label htmlFor="bookUpload">
                            <input onChange={(e)=>handleUploadBookImage(e)} type="file" id='bookUpload' hidden />
                            <FaPlus className='text-3xl ms-2' />
                        </label>}

                        </div>
                    }
                </div>

            </div>
            {/* reset & add button */}
                                <div className="flex md:justify-end justify-center w-full px-5 mt-10">
                                    <button onClick={resetForm} className='bg-gray-600 text-white py-2 px-3 rounded hover:text-gray-600 hover:bg-white'>RESET</button>
                                    <button onClick={handleAddBook}  className='bg-blue-600 text-white py-2 px-3 rounded ms-5 hover:text-blue-600 hover:bg-white'>ADD BOOK DETAILS</button>
                                </div>
                                <ToastContainer position='top-center' theme='colored' autoClose={1000}/>
        </div>
    )
}

export default UploadBook