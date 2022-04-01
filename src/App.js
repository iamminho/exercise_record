import {useRef, useState} from "react";
import './App.css';
import ExerciseEdit from './ExerciseEdit';
import ExerciseList from './ExerciseList';

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author,content) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      created_date,      
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.` )
    const newExerciseList = data.filter((it)=>it.id !== targetId)
    setData(newExerciseList);
  }

  return (
    <div className="App">
      <h2>record</h2>
      <ExerciseEdit onCreate = {onCreate} />
      <ExerciseList onDelete = {onDelete} exerciseList={data} />
    </div>
  );
}

export default App;
