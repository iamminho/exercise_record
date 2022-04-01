import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from "@material-ui/core";
const ExerciseEdit = ({onCreate}) => {
    
    const [state, setState] = useState({
        author: "",
        content: "",
    });

  const [authorError, setAuthorError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [authHelperText, setAuthHelperText] = useState("이름을 입력해 주세요");
  const [cntHelperText, setCntHelperText] = useState("간단히 설명해 주세요");

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        if (state.author.length === 0) {
          setAuthorError(true);
          setAuthHelperText("이름을 한글자 이상 작성해 주세요");
        } else {
          setAuthorError(false);
          setAuthHelperText("이름을 입력해 주세요");
        }
    
        if (state.content.length < 5) {
          setContentError(true);
          setCntHelperText("설명란에 다섯글자 이상 작성해 주세요");                      
        } else {
          setContentError(false);
          setCntHelperText("간단히 설명해 주세요");
        }
    
        if (state.author.length >= 1 && state.content.length >= 5) {          
          onCreate(state.author, state.content)
          alert("저장이 완료되었습니다.");     
          console.log(state);     
        }
        
      };
    return (
        <div className='ExerciseEdit'>          
            <Container>
                <TextField                                        
                    margin='nomal'
                    fullWidth                    
                    id="standard-helperText"
                    label="이름"                
                    helperText={authHelperText}
                    name = "author"
                    value={state.author}
                    onChange={handleChangeState}
                    error={authorError}
                />

                <TextField
                    margin='nomal'
                    fullWidth
                    multiline
                    rows={10}                      
                    id="outlined-helperText"
                    label="설명란"                    
                    helperText={cntHelperText}
                    name= "content"
                    value = {state.content}
                    onChange={handleChangeState}
                    error = {contentError}
                />

                <Button 
                    variant="contained" 
                    disableElevation 
                    onClick={handleSubmit}
                >
                    저장하기
                </Button>
            </Container>
        </div>
    )  
}
export default ExerciseEdit;