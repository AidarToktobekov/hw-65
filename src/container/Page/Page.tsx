import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosApi from "../../axios-api";


const Page = ()=>{

    const [loading, setLoading] = useState(false);
    const [infoPage, setInfoPage] = useState({title:'', content: ''})

    const param = useParams();
    console.log(param.id);

    const getPage = async()=>{
        try {
            setLoading(true);
            const response = await axiosApi.get('/pages/'+ param.id +'.json'); 
            setInfoPage(response.data)
            console.log(response.data);
            
          } finally {
      
            setLoading(false); 
      
          }
    }

    useEffect(()=>{
        void getPage();
    },[param.id])
    

    return(
        <>
        <div className="container">
            <h3>{infoPage.title}</h3>
            <p>{infoPage.content}</p>
        </div>
        </>
    )
}

export default Page