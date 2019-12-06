import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Chip, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    borderTop: 'solid 4px #ff8001',

  },
  header: {
    backgroundColor: '#333333',
    color: '#fff',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  footer: {
      flexDirection: 'column'
  }
}));

export default function CardView({ cardData }) {
  const classes = useStyles();
  const { title, tags, caption, category, subcategory, assets = [] } = cardData
    let image
    let imgCaption
  if (assets !== null && assets.length > 0) {
    [{ asset: { image, caption: imgCaption }}] = assets
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={imgCaption}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {caption}
        </Typography>

      </CardContent>
      <Divider />
      <CardActions disableSpacing className={classes.footer}>
        {category} : {subcategory}
        <div>
            {tags.map((tag) => <IconButton aria-label={tag}>
            <Chip label={tags} />
            </IconButton>)}
        </div>
      </CardActions>
    </Card>
  );
}
