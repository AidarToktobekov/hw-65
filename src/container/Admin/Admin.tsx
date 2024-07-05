import { ChangeEvent, useEffect, useState } from "react";
import axiosApi from "../../axios-api";
import { useNavigate } from "react-router-dom";


const Admin =()=>{
    const [loading, setLoading] = useState(false);

    const [selectValue, setSelectValue] = useState('about');
    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const navigate = useNavigate();
    let preloader = null;
    
    if (loading === true) {
        preloader = (
          <>
              <div id="preloader">
                <div className="loader"></div>
              </div>
          </>
        );
    }

    const getPage = async()=>{
        try {
            setLoading(true);
            const response = await axiosApi.get('/pages/'+ selectValue +'.json'); 
            setTitleValue(response.data.title);
            setContentValue(response.data.content);
          } finally {
            setLoading(false); 
          }
    }
    useEffect(()=>{
        void getPage();
    },[selectValue]);


    const putPage = async(event:React.FormEvent)=>{
        event.preventDefault();
        try {
            setLoading(true);
            const newPage = {
                title: titleValue,
                content: contentValue,
            }
                const response = await axiosApi.put('/pages/'+ selectValue +'.json', newPage);
            
          } finally {
            setLoading(false);   
            navigate('/pages/'+selectValue);
          }
    }
    


    const getFieldValue=(event:ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>, state: (value:string)=>void)=>{
        state(event.target.value);
    }

    return(
        <>  
        {preloader}
            <h3>Edit pages</h3>
            <form onSubmit={putPage}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Select page</label>
                    <select name="pages" defaultValue={selectValue} onChange={(event:ChangeEvent<HTMLSelectElement>)=>{getFieldValue(event, setSelectValue)}} className="d-block">
                        <option value="about">About</option>
                        <option value="contacts">Contacts</option>
                        <option value="info">Info</option>
                    </select>
                    <div id="emailHelp" className="form-text">Выберите страницу которую хотите редактировать</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                    <input type="text" value={titleValue} onChange={(event:ChangeEvent<HTMLInputElement>)=>{getFieldValue(event, setTitleValue)}} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-check-label">Content</label>
                    <textarea rows={3} value={contentValue} onChange={(event:ChangeEvent<HTMLTextAreaElement>)=>{getFieldValue(event, setContentValue)}} className="form-control" />
                </div>
                <button type="submit" className="btn btn-light">Save</button>
            </form>
        </>
    )
}

export default Admin;