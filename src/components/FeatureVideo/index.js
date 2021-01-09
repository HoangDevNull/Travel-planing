import React from "react";

import { Box, Container, Typography } from "@material-ui/core";
import HeadSessions from "./HeadSessions";
import Category from "./components/Categories";
import PreviewItem from "./components/PreviewItem";

const FeatureVideo = () => {
  const listCates = [
    "Explorer",
    "Feature Videos",
    // "Adventures",
    // "Cuisines",
    // "Art & Culture",
    // "Journeys",
  ];
  const previewItem = [
    { image: "", title: "title 1", author: "author 1" },
    { image: "", title: "title 2", author: "author 2" },
    { image: "", title: "title 3", author: "author 3" },
  ];
  return (
    <>
      <HeadSessions />
      <Box mb="50px">
        <Container>
          <Box display="flex" flexWrap="nowrap">
            {previewItem.map((item, index) => {
              return (
                <PreviewItem
                  img={item.image}
                  title={item.title}
                  author={item.author}
                />
              );
            })}
          </Box>
          {/* {listCates.map((value) => {
            return <Category title={value} />;
          })} */}
        </Container>
      </Box>
    </>
  );
};

export default FeatureVideo;
