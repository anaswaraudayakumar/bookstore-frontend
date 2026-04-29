import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

// Request interceptors : handling token append to header 
axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization =`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

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
                console.log("Unathourised access-invalid token!!!")     
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