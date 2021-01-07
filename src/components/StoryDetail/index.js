import React from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import Preview from './Preview';
import HeadSessions from './HeadSessions';
import { useHistory, useParams } from 'react-router-dom';

import { postData } from 'components/TopStories/data';
import NotifyDialog from 'components/common/NotifyDialog';

const StoryDetail = () => {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(false);

  const post = postData[1];

  const handleClick = (status) => {
    if (status === 1) {
      setContent('Bạn có đồng ý duyệt bài viết nay không ?');
    } else {
      setContent('Bạn có đồng ý block bài viết nay không ?');
    }
    setOpen(true);
  };

  const handleRoute = () => {
    history.push('/all-posts');
  };
  return (
    <>
      <HeadSessions {...post} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} container justify="center" alignItems="center">
            <Preview />
          </Grid>
          <Grid item xs={2} />
          <Grid item container justify="space-around" xs={8}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClick(1)}
            >
              Post
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.goBack();
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Container>
      <NotifyDialog
        content={content}
        open={open}
        onAgree={() => handleRoute()}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default StoryDetail;
