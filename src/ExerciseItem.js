import React, { useEffect, useRef, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from '@mui/material';

const ExerciseItem = ({
    onEdit,
    onDelete,
    author,
    content,
    created_date,
    id
}) => {

    useEffect(() => {console.log(`${id} mount!`)});

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => { setIsEdit(!isEdit) }
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleDelete = () => {
        if(window.confirm(`${id+1}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
        }
    }

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }    

        if(window.confirm(`${id}번 째 게시물을 수정하시겠습니까? `)) {
            onEdit(id, localContent);
            toggleIsEdit();
        }

        
    }
    

    return (
        <Container>
            <Card>
                <CardActionArea>                          
                    <CardContent>                
                        <Typography gutterBottom variant="h5" component="h2">
                            {author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {isEdit ? (
                                <>
                                    <textarea 
                                        ref={localContentInput}
                                        value={localContent}
                                        onChange={(e)=>setLocalContent(e.target.value)}
                                    />
                                </>
                            ) : (
                                <>{content}</>
                            )}
                        </Typography>
                    </CardContent>
                    <Typography>
                        카드번호: {id+1} 작성시간: {new Date(created_date).toLocaleString()}                    
                    </Typography>
                    
                </CardActionArea>
                <CardActions>
                    {isEdit ? (
                        <>
                            <Button 
                                size="small" 
                                color="primary"
                                onClick={handleQuitEdit}
                            >
                            수정취소
                            </Button>

                            <Button 
                                size="small" 
                                color="primary"
                                onClick={handleEdit}
                            >
                            수정완료
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button 
                                size="small" 
                                color="primary"
                                onClick={handleDelete}
                            >
                            삭제하기
                            </Button>

                            <Button 
                                size="small" 
                                color="primary"
                                onClick={toggleIsEdit}
                            >
                            수정하기
                            </Button>
                        </>
                    )}
                    
                    
                    
                </CardActions>
            </Card>
        </Container>
    );
}
export default React.memo(ExerciseItem);