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
      <Content />
    </>
  );
};

export default StoryDetail;
