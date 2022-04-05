import React, {useMemo, useEffect, useCallback, useRef, useReducer} from "react";
import './App.css';
import ExerciseEdit from './ExerciseEdit';
import ExerciseList from './ExerciseList';
import LifeCycle from './LifeCyle';


const reducer = (state, action) => {
  switch ((action.type)) {
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? 
        { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const ExerciseStateContext = React.createContext();

export const ExerciseDispatchContext = React.createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = useCallback((author, content) => {
    dispatch({
      type: `CREATE`, 
      data: { author, content, id: dataId.current } 
    });
    // 
    dataId.current += 1;
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const memoizedDispatches = useMemo(()=>{
    return {onCreate, onDelete, onEdit}
  }, [])

  return (
    <ExerciseStateContext.Provider value = {data}>
      <ExerciseDispatchContext.Provider value = {memoizedDispatches}>
        <div className="App">
          <LifeCycle />
          <h2>record</h2>
          <ExerciseEdit onCreate={onCreate} />
          <ExerciseList onEdit={onEdit} onDelete={onDelete} />
        </div>
      </ExerciseDispatchContext.Provider>
    </ExerciseStateContext.Provider>
  );
}

export default App;
