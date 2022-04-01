import {useRef, useState} from "react";
import './App.css';
import ExerciseEdit from './ExerciseEdit';
import ExerciseList from './ExerciseList';

const exerciseList = [
  {
    id: 1,
    author: "사람1",
    content: "하이 1",
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "사람2",
    content: "하이 2",
    created_date: new Date().getTime()
  }
];


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

  return (
    <div className="App">
      <h2>record</h2>
      <ExerciseEdit onCreate = {onCreate} />
      <ExerciseList exerciseList={data} />
    </div>
  );
}

export default App;
