import { useContext } from 'react'
import ExerciseItem from './ExerciseItem'
import { ExerciseStateContext } from "./App";

const ExerciseList = () => {
    const exerciseList = useContext(ExerciseStateContext);
    return ( 
        <div className='ExerciseList'>
            <h2> Record List </h2>
            <h4>{exerciseList.length}개의 일기가 있습니다.</h4>
            <div>
                {exerciseList.map((it) => (
                    <ExerciseItem key={it.id} {...it} />                                                                                        
                ))}
            </div>
            
        </div>
       

    )
}
export default ExerciseList 