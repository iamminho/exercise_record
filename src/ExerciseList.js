import React , {useState} from "react";
import { ReactDOM } from "react-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ClassNames } from '@emotion/react';
import { Container } from '@mui/material';

const ExerciseList = ({ exerciseList }) => {
    return ( 
        <div className='ExerciseList'>
            <h2> Record List </h2>
            <h4>{exerciseList.length}개의 일기가 있습니다.</h4>
            <div>
                {exerciseList.map((it) => (
                    <Container>
                        <Card>
                            <CardActionArea>                          
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {it.author}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {it.content}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                삭제하기
                                </Button>
                                <Button size="small" color="primary">
                                수정하기
                                </Button>
                            </CardActions>
                        </Card>
                    </Container>
                ))}
            </div>
            
        </div>
       

    )
}
export default ExerciseList 