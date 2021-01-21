import React, { useState } from "react";
import { Box, Container } from "@material-ui/core";
import HeadSessions from "./HeadSessions";
import ListImage from "./components/ListImage";
import GalleryInfo from "./components/GalleryInfo";
import AddItemModal from "./components/AddItemModal";

const CreateGallery = () => {
  const count = 50; // count for maximum loaded image

  const defaultUrls = [
    {
      url:
        "https://images.pexels.com/photos/6027991/pexels-photo-6027991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Love in peace",
    },
    {
      url:
        "https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Beach not bezz",
    },
    {
      url:
        "https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Saharah so hot",
    },
    {
      url:
        "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Ireland cooling",
    },
    {
      url:
        "https://images.pexels.com/photos/4709480/pexels-photo-4709480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Back bag nack",
    },
    {
      url:
        "https://images.pexels.com/photos/6027991/pexels-photo-6027991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Kooling yashi",
    },
    {
      url:
        "https://images.pexels.com/photos/4627309/pexels-photo-4627309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Japan in pease",
    },
    {
      url:
        "https://images.pexels.com/photos/6190993/pexels-photo-6190993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Vietnam skiopping",
    },
    {
      url:
        "https://images.pexels.com/photos/3178852/pexels-photo-3178852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Not a number or letter",
    },
    {
      url:
        "https://images.pexels.com/photos/4709480/pexels-photo-4709480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description: "Steam not bad",
    },
  ];
  const [imageUrls, setImageUrls] = React.useState(defaultUrls);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleDeleteImage = (i) => {
    let arr = imageUrls;
    arr = arr.filter((item, index) => index !== i);
    setImageUrls(arr);
  };
  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleAddNewItem = () => {
    setOpenAddModal(true);
  };

  const handleSaveNewItem = (obj) => {
    console.log("Handle Save New Item ne");
    let currentItems = imageUrls;
    currentItems.unshift(obj);
    setImageUrls(currentItems);
  };

  return (
    <>
      <HeadSessions />
      <Box>
        <Container>
          <GalleryInfo onAddNewItem={handleAddNewItem} />
          <AddItemModal
            open={openAddModal}
            handleClose={handleCloseAddModal}
            onSavedNewItem={handleSaveNewItem}
          />
          <ListImage
            pageStart={0}
            currentSize={imageUrls.length}
            maxSize={count}
            items={imageUrls}
            onDeleteImage={handleDeleteImage}
          />
        </Container>
      </Box>
    </>
  );
};

export default CreateGallery;
