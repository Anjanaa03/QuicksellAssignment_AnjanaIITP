
import axios from 'axios';
// axios is imported for fetching data 
const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

// if there is some problem in fetching data maybe we could test the code using manually entered data too

export const fetchTickets = async() =>{
       try{
              const response = await axios.get(API_URL) ; 
              return response.data.tickets ; 
       }
       catch(error){
              console.error('Error in fetching data : ' , error ) ; 
              throw error ; 
       }
} ; 
export const fetchUsers = async()=>{
       try{
              const response = await axios.get(API_URL) ; 
              return response.data.users ; 
       }
       catch(error){
              console.error('Error in fetching users : ' , error ) ; 
              throw error ; 
       }
} ; 

