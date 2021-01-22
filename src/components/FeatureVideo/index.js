import React from "react";

import { Box, Container, useTheme } from "@material-ui/core";
import HeadSessions from "./HeadSessions";
import Category from "./components/Categories";
import PreviewItem from "./components/PreviewItem";
import { useHistory } from "react-router-dom";
import FeaturedVideo from "./components/FeaturedVideo";

const FeatureVideo = () => {
  const theme = useTheme();
  const history = useHistory();

  const handleClickCard = React.useCallback(() => {
    history.push("/feature-video-detail");
  }, [history]);

  const previewItem = [
    ,
    {
      category: "Featured Videos",
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
          title: "Traveling VietNam",
          author: "mewmewo",
        },
        {
          image:
            "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Make America Greater",
          author: "Donald Trump",
        },
        {
          image:
            "https://images.pexels.com/photos/1904849/pexels-photo-1904849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Russia isza bzt",
          author: "Vladimir Putin",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Traveling Laos",
          author: "mewmewo",
        },
      ],
    },
    {
      category: "Cuisines",
      items: [
        {
          image:
            "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Cuisnines so happy",
          author: "Binhs",
        },
        {
          image:
            "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Saharah aza",
          author: "Mohamed Ali",
        },
        {
          image:
            "https://images.pexels.com/photos/2040627/pexels-photo-2040627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Garrett Delarosa",
          author: "Aydin Baird",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Tamika Cassidy",
          author: "Ahmad Rowley",
        },
      ],
    },
    {
      category: "Art & Culture",
      items: [
        {
          image:
            "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Rehaan Peterson",
          author: "Millie Corrigan",
        },
        {
          image:
            "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Millie Corrigan",
          author: "Marcie Millar",
        },
        {
          image:
            "https://images.pexels.com/photos/2040627/pexels-photo-2040627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Scarlett-Rose Slater",
          author: "Diya Power",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Chelsey Callaghan",
          author: "Diya Power",
        },
      ],
    },
    {
      category: "Journeys",
      items: [
        {
          image:
            "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Paloma Ritter",
          author: "Abiha Bryan",
        },
        {
          image:
            "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Rafferty Griffith",
          author: "Kate Vincent",
        },
        {
          image:
            "https://images.pexels.com/photos/2040627/pexels-photo-2040627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Zephaniah Oakley",
          author: "Alfie-Lee Mckinney",
        },
        {
          image:
            "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Poppy-Rose Frazier",
          author: "Zishan Rivers",
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
              <Box key={index}>
                <Category title={category} />
                {index == 1 ? (
                  <FeaturedVideo
                    key={index}
                    items={items}
                    onClick={handleClickCard}
                  />
                ) : (
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
                )}
              </Box>
            );
          })}
        </Container>
      </Box>
    </>
  );
};

export default FeatureVideo;
