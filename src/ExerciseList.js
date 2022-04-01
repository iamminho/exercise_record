import ExerciseItem from './ExerciseItem'


const ExerciseList = ({ onDelete, exerciseList }) => {
    return ( 
        <div className='ExerciseList'>
            <h2> Record List </h2>
            <h4>{exerciseList.length}개의 일기가 있습니다.</h4>
            <div>
                {exerciseList.map((it) => (
                    <ExerciseItem 
                        key={it.id} {...it} 
                        onDelete={onDelete}
                    />
                    
                ))}
            </div>
            
        </div>
       

    )
}
export default ExerciseList 