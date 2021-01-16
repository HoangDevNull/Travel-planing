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
          title: "Outdoor Adventure in California",
          author: "Tran Dan",
        },
        {
          image:
            "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Da nang traveler",
          author: "VNCO",
        },
        {
          image:
            "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Nha Trang Beach",
          author: "Hoang 123",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Onisanbeach",
          author: "ultimate Auth",
        },
      ],
    },
    {
      category: "Adventures",
      items: [
        {
          image:
            "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 1",
          author: "author 1",
        },
        {
          image:
            "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 2",
          author: "author 2",
        },
        {
          image:
            "https://images.pexels.com/photos/1904849/pexels-photo-1904849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 3",
          author: "author 3",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 4",
          author: "author 4",
        },
      ],
    },
    {
      category: "Cuisines",
      items: [
        {
          image:
            "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 1",
          author: "author 1",
        },
        {
          image:
            "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 2",
          author: "author 2",
        },
        {
          image:
            "https://images.pexels.com/photos/2040627/pexels-photo-2040627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 3",
          author: "author 3",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 4",
          author: "author 4",
        },
      ],
    },
    {
      category: "Art & Culture",
      items: [
        {
          image:
            "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 1",
          author: "author 1",
        },
        {
          image:
            "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 2",
          author: "author 2",
        },
        {
          image:
            "https://images.pexels.com/photos/2040627/pexels-photo-2040627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 3",
          author: "author 3",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 4",
          author: "author 4",
        },
      ],
    },
    {
      category: "Journeys",
      items: [
        {
          image:
            "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 1",
          author: "author 1",
        },
        {
          image:
            "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 2",
          author: "author 2",
        },
        {
          image:
            "https://images.pexels.com/photos/2040627/pexels-photo-2040627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 3",
          author: "author 3",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "title 4",
          author: "author 4",
        },
      ],
    },
  ];
  return (
    <>
      <HeadSessions />
      <Box>
        <Container>
          {previewItem.map((item, index) => {
            const { category, items } = item;

            return (
              <Box key={index} mb="10rem">
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
