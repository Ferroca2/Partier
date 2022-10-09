import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { CommentOutlined, AddShoppingCartOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import style from './post.module.css'


export default function Post() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{background: 'transparent', boxShadow: 'none'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="MakerDAO"
        titleTypographyProps={{fontWeight:'bold'}}
        style={{textAlign:'left'}}
      />
      <CardMedia
        component="img"
        height="194"
        image="sample.jpeg"
        alt="Paella dish"
        style={{borderRadius: '20px'}}
      />
      <CardActions disableSpacing style={{justifyContent:'space-between'}}>
      <div className={style.date}>
        <IconButton aria-label="add to favorites">
          <AddShoppingCartOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <CommentOutlined />
        </IconButton>
        </div>
        <div className={style.date}><Typography sx={{fontWeight: 'bold'}}>10/10/2022</Typography></div>
      </CardActions>
      <CardContent style={{textAlign: 'left'}}>
            If you've ever attended a DaiVinity event in the past, you know what to expect....🚀
      </CardContent>
    </Card>
  );
}
