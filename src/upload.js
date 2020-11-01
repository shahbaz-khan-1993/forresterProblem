import React from 'react';
import { useHistory } from 'react-router-dom';

const UploadImg =()=>{
    const history = useHistory();
    const onImageChange = (e) => {
        localStorage.setItem("img_element",e.target.files[0]);
        history.push({
            pathname:'/puzzle',
            state:e.target.files[0]
        })
    }

    return(
        <div className="align-center"> 
            <input id="upload_img" type="file" onChange={onImageChange}
                    accept=".jpg, .jpeg, .png"/>
        </div>
    )
}

export default UploadImg;