import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

//response interceptors.response :Handling Global/common Errors
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response recived");
        return response
        
    },
    (error)=>{
        if(error.response){
            const status =error.response.status
            if(status==401){
                console.log("Unathourised access-Redirect to Login!!!")     
            }else if (status==404){
                console.log("API not found!!");
            }else if(status==500){
                console.log("Server Error!!!");
                
            }else if (error.request){
                console.log("Client error");
                return error.request

            }else{
                console.log("Error: "+error.message);
                
            }
            return Promise.reject(error)
        }
    }
)
export default axiosInstance