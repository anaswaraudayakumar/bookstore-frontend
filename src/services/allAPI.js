import apiService from "../api/apiService";

//register api : called by authentication component when register btn clicked 
export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData) 
    // we didnt give reqHeader bcz defaultly header is json so it is same if didnt give
}

//login api : called by authentication component when register btn clicked 
export const loginAPI = async (userData)=>{
    return await apiService("POST","/login",userData) 
    // we didnt give reqHeader bcz defaultly header is json so it is same if didnt give
}

//google-login api :called by auth component when google login clicked 
export const googleloginAPI = async (userData)=>{
    return await apiService("POST","/google-login",userData)
}

//useredit api : called by edit component when update  clicked
export const userUpdateAPI = async (userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}

//addBook api : called by uploadbook component when add button  clicked
export const addBookAPI = async (bookDetails)=>{
    return await apiService("POST",`/books`,bookDetails)
}

//getHome books api : called by home component when page opens http://localhost:3000/home-books
export const getHomePageBooksAPI = async ()=>{
    return await apiService("GET",`/home-books`,{})
}