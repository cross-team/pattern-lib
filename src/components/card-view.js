import React from 'react';
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Chip,
  Divider
} from '@material-ui/core/styles';

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
      margin: theme.spacing(1),
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
      <div className={classes.footer}>
        {category} : {subcategory}
        <div>
            {tags.map((tag) => <IconButton aria-label={tag}>
                <Chip label={tag} color="primary"/>
            </IconButton>)}
        </div>
      </div>
    </Card>
  );
}
