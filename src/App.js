import {useEffect, useCallback, useRef, useState} from "react";
import './App.css';
import ExerciseEdit from './ExerciseEdit';
import ExerciseList from './ExerciseList';
import LifeCycle from './LifeCyle';

function App() {

  const [data,setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = useCallback((author,content) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      created_date,      
      id : dataId.current
    }
    dataId.current += 1;
    setData((data) => [newItem, ...data])
  }, [] );

  const onDelete = useCallback((targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  return (
    <div className="App">
      <LifeCycle />
      <h2>record</h2>
      <ExerciseEdit onCreate = {onCreate} />
      <ExerciseList onEdit={onEdit} onDelete = {onDelete} exerciseList={data} />
    </div>
  );
}

export default App;
