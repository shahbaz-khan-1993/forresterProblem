import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Puzzle from 'react-image-puzzle';

const ImgPuzzle = () =>{
    const file = useLocation().state
    const [solved, setSolved] = useState(false);
    return(
        <div className="align-center">
            { solved && <div className="success_message">Congratulations! Puzzle Solved</div>}
            { file &&
                <Puzzle image={URL.createObjectURL(file)} level={3} onDone={()=>{
                    setSolved(true);
                }}/>
            }
        </div>
    )
}

export default ImgPuzzle;