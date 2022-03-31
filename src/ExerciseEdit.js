import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const ExerciseEdit = () => {
    return (
        <div className='ExerciseEdit'>
            <Box
                sx={{
                    width: 800,
                    height: 800,
                    // border: '1px solid grey'
                }}
                
            >
                <TextField
                    // error
                    margin='nomal'
                    fullWidth                    
                    id="standard-helperText"
                    label="이름"                
                    helperText="이름을 입력해 주세요"
                />

                <TextField
                    margin='nomal'
                    fullWidth
                    multiline
                    rows={10}
                    maxRows={12}     
                    id="outlined-helperText"
                    label="설명란"                    
                    helperText="간단히 설명해 주세요"
                />

                <Button variant="contained" disableElevation>
                    저장하기
                </Button>
            </Box>
        </div>
    )  
}
export default ExerciseEdit;