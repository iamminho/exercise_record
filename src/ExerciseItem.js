import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from '@mui/material';

const ExerciseItem = ({
    onDelete,
    author,
    content,
    created_date,
    id
}) => {
    return (
        <Container>
            <Card>
                <CardActionArea>                          
                    <CardContent>                
                    <Typography gutterBottom variant="h5" component="h2">
                        {author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                    <Typography>
                        카드번호: {id+1} 작성시간: {new Date(created_date).toLocaleString()}                    
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                        size="small" 
                        color="primary"
                        onClick={() => {
                            console.log(id);
                            if(window.confirm(`${id+1}번째 일기를 정말 삭제하시겠습니까?`)) {
                                onDelete(id);
                            }
                        }}
                    >
                    삭제하기
                    </Button>
                    <Button size="small" color="primary">
                    수정하기
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}
export default ExerciseItem;