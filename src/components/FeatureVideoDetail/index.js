import React from "react";
import { Box, Container } from "@material-ui/core";
import HeadSessions from "./HeadSessions";
import LoaderProgress from "./components/Loader";
import StackInfiniteScroll from "./components/StackInfiniteScroll";
import UserCreator from "./components/UserCreator";

const FeatureVideoDetail = () => {
  const delay = (millis) => {
    // delay method for test, should remove when deploy
    return new Promise((res) => setTimeout(res, millis));
  };
  const count = 50; // count for maximum loaded image
  const handleLoadMore = async () => {
    // async method for test, should remove when deploy
    const imgs = [
      "https://images.pexels.com/photos/6027991/pexels-photo-6027991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/4709480/pexels-photo-4709480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/6027991/pexels-photo-6027991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/4709480/pexels-photo-4709480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ];
    await delay(2000); // delay for test, should remove when deploy
    setImageUrls(imageUrls.concat(imgs));
  };

  const defaultUrls = [
    "https://images.pexels.com/photos/6027991/pexels-photo-6027991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4709480/pexels-photo-4709480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6027991/pexels-photo-6027991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4709480/pexels-photo-4709480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];
  const [imageUrls, setImageUrls] = React.useState(defaultUrls);
  return (
    <>
      <HeadSessions />
      <Box>
        <Container>
          <UserCreator />
          <StackInfiniteScroll
            pageStart={0}
            loadMoreHandler={handleLoadMore}
            currentSize={imageUrls.length}
            maxSize={count}
            loaderComponent={<LoaderProgress />}
            items={imageUrls}
          />
        </Container>
      </Box>
    </>
  );
};

export default FeatureVideoDetail;
