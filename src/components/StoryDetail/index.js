import React from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import Content from './Content';
import HeadSessions from './HeadSessions';
import { useHistory, useParams } from 'react-router-dom';
import { postAction } from 'redux/post';

import { postData } from 'components/TopStories/data';
import NotifyDialog from 'components/common/NotifyDialog';

const StoryDetail = () => {
  const history = useHistory();
  const { id } = useParams();

  React.useEffect(() => {
    const { location } = history;
    if (location.pathname.includes('/preview')) return;
    if (id) {
    }
  }, [id, history]);

  const [open, setOpen] = React.useState(false);
  const post = postData[1];

  const handleClick = () => {
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
          <Grid
            item
            xs={12}
            md={8}
            container
            justify="center"
            alignItems="center"
          >
            <Content />
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
        content={'Are you sure to perform this action?'}
        open={open}
        onAgree={() => handleRoute()}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default StoryDetail;