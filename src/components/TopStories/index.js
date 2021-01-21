import React from "react";

import {
  Box,
  Typography,
  makeStyles,
  Container,
  FormControl,
} from "@material-ui/core";

import HeadSessions from "./HeadSessions";
import FirstElement from "./elements/FirstElement";
import SecondElement from "./elements/SecondElement";

import { postData } from "./data";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {},
  head_image_wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

const TopStories = () => {
  const classes = useStyles();

  const [data, setData] = React.useState(postData);

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value === "") {
      setData(postData);
      return;
    }
    const newData = [...data].filter((x) =>
      x.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setData(newData);
  };
  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (value === 0 || !value) setData(postData);
    if (name === "category") {
      const newData = [...postData].filter((x) => x.category === value);
      setData(newData);
      return;
    }
    if (name === "country") {
      console.log("contry", value);
    }
    if (name === "sort") {
      if (value === "date-desc") {
        const newData = [...postData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setData(newData);
        return;
      } else if (value === "date-asc") {
        const newData = [...postData].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setData(newData);
        return;
      } else if (value === "name-desc") {
        const newData = [...postData].sort((a, b) =>
          ("" + a.title).localeCompare(b.title)
        );
        setData(newData);
        return;
      } else {
        const newData = [...postData].sort((a, b) =>
          ("" + b.title).localeCompare(a.title)
        );
        setData(newData);
        return;
      }
    }
  };

  return (
    <>
      <HeadSessions />
      <Box mb="50px">
        <Container>
          <Box>
            <FirstElement onSearch={handleSearch} onFilter={handleFilter} />
          </Box>
          <SecondElement data={data} />
        </Container>
      </Box>
    </>
  );
};

export default TopStories;
