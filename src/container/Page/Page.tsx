import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosApi from "../../axios-api";


const Page = ()=>{

    const [loading, setLoading] = useState(false);
    const [infoPage, setInfoPage] = useState({title:'', content: ''})

    const param = useParams();
    let preloader = null;
    
    if (loading === true) {
        preloader = (
          <>
              <div id="preloader">
                <div className="loader"></div>
              </div>
          </>
        );
    };

    const getPage = async()=>{
        try {
            setLoading(true);
            const response = await axiosApi.get('/pages/'+ param.id +'.json'); 
            setInfoPage(response.data);
          } finally {
            setLoading(false); 
          }
    }

    useEffect(()=>{
        void getPage();
    },[param.id]);
    

    return(
        <>
        {preloader}
        <div className="container">
            <h3>{infoPage.title}</h3>
            <p>{infoPage.content}</p>
        </div>
        </>
    )
}

export default Page