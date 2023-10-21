import axios from "axios"



    export async function fetchAjax (){
        const response = await axios.get('http://localhost:3333/user/user')
        console.log(response)
        return response.data
    }


