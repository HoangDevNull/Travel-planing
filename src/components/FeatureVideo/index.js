import React from "react";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import HeadSessions from "./HeadSessions";
import Category from "./components/Categories";
import PreviewItem from "./components/PreviewItem";
import { useHistory } from "react-router-dom";

const FeatureVideo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();

  const handleClickCard = React.useCallback(() => {
    history.push("/feature-video-detail");
  }, [history]);

  const previewItem = [
    {
      category: "Explorer",
      items: [
        {
          image:
            "https://images.pexels.com/photos/5246429/pexels-photo-5246429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 1",
          author: "author 1",
        },
        {
          image:
            "https://images.pexels.com/photos/5246429/pexels-photo-5246429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 2",
          author: "author 2",
        },
        {
          image:
            "https://images.pexels.com/photos/5246429/pexels-photo-5246429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 3",
          author: "author 3",
        },
        {
          image:
            "https://images.pexels.com/photos/5246429/pexels-photo-5246429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 4",
          author: "author 4",
        },
      ],
    },
    {
      category: "Adventures",
      items: [
        { image: "/", title: "title 1", author: "author 1" },
        { image: "/", title: "title 2", author: "author 2" },
        { image: "/", title: "title 3", author: "author 3" },
      ],
    },
    {
      category: "Cuisines",
      items: [
        { image: "/", title: "title 1", author: "author 1" },
        { image: "/", title: "title 2", author: "author 2" },
        { image: "/", title: "title 3", author: "author 3" },
      ],
    },
  ];
  return (
    <>
      <HeadSessions />
      <Box mb="50px">
        <Container>
          {previewItem.map((item, index) => {
            const { category, items } = item;

            return (
              <Box key={index}>
                <Category title={category} />
                <Box display="flex" flexWrap="nowrap">
                  {items.map((item, index) => {
                    return (
                      <PreviewItem
                        key={index}
                        img={item.image}
                        title={item.title}
                        author={item.author}
                        onClick={handleClickCard}
                      />
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Container>
      </Box>
    </>
  );
};

export default FeatureVideo;
