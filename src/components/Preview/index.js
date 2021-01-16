import React from 'react';

import { Grid, Container, Button, Box } from '@material-ui/core';

import HtmlPreviewer from 'components/common/HtmlPreviewer';
import HeadSessions from './HeadSessions';
import { useHistory } from 'react-router-dom';
import NotifyDialog from 'components/common/NotifyDialog';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from 'redux/post';

const Preview = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const post = useSelector((state) => state.post.previewPost);

  const handleClick = () => {
    setOpen(true);
  };
  const handleCreateNewPost = () => {
    dispatch(createPostAction.set(null));
    history.goBack();
  };

  if (!post) history.goBack();

  return (
    <>
      <HeadSessions {...post} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={2} />
          <Grid
            item
            xs={12}
            md={8}
            container
            justify='center'
            alignItems='center'
          >
            <HtmlPreviewer data={post?.content} />
          </Grid>
          <Grid item xs={2} />
          <Grid item container justify='center' xs={12}>
            <Button
              size='large'
              variant='contained'
              color='primary'
              onClick={() => handleClick(1)}
            >
              Post
            </Button>
            <Box mx={2} />
            <Button
              size='large'
              variant='outlined'
              color='primary'
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
        content={'Are you sure to perform this action?'}
        open={open}
        onAgree={handleCreateNewPost}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Preview;
