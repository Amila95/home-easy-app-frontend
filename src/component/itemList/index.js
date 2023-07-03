import React, { useState, useContext, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Button } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import UpdateIcon from "@mui/icons-material/Update";
import AddIcon from "@mui/icons-material/Add";
import Undo from "@mui/icons-material/Undo";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddModal from "../addModal";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Index() {
  //const { modalOpen, closeModal } = useContext(ModalProvider);

  const [checked, setChecked] = useState([]);
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [checkItem, setCheckItem] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/restore");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = async () => {
    console.log("toDate" + toDate.format("YYYY-MM-DD"));

    console.log("fromDate" + fromDate.format("YYYY-MM-DD"));

    // fetch(
    //   "/api/v1/restore/restoreDateBitween?start=" +
    //     fromDate.format("YYYY-MM-DD") +
    //     "&end=" +
    //     toDate.format("YYYY-MM-DD")
    // )
    //   .then((response) => {
    //     console.log("response : " + response);
    //     //setItems(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      const response = await fetch(
        "/api/v1/restore/restoreDateBitween?start=" +
          fromDate.format("YYYY-MM-DD") +
          "&end=" +
          toDate.format("YYYY-MM-DD")
      );
      const data = await response.json();
      console.log("data : " + data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = (value) => {
    console.log("checkItem value: " + value.id);

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setCheckItem(newChecked);

    console.log("checkItem: " + JSON.stringify(newChecked));
  };

  const deleteItems = () => {
    fetch("/api/v1/item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkItem),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Delete successful");
          fetchData();
        } else {
          console.error("Delete failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteItem = (id) => {
    console.log("click : delete ");
    fetch("/api/v1/item/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Delete successful");
          fetchData();
        } else {
          console.error("Delete failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const updatetems = () => {
    fetch("/api/v1/item", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkItem),
    })
      .then((response) => {
        if (response.ok) {
          console.log("updated successful");
          fetchData();
        } else {
          console.error("updated failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const selectItem = (value) => {
    console.log("click : delete ");
    fetch("/api/v1/item/" + value.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: value.name,
        pickup: true,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("checkin succefully");
          fetchData();
        } else {
          console.error("Delete failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Container maxWidth="xl">
        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={updatetems}
            >
              <DoneAllIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={deleteItems}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
          <AddModal fetchData={fetchData} />
        </Box> */}
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DateField
              label="Uncontrolled field"
              defaultValue={dayjs("2022-04-17")}
            /> */}
            {/* <DateField
              label="Form "
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
            <Box sx={{ margin: "5px" }} />
            <DateField
              label="To"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            /> */}
            <DatePicker
              label="From"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
            />
            <Box sx={{ margin: "5px" }} />
            <DatePicker
              label="To"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
            />
            <Box sx={{ margin: "5px" }} />
          </LocalizationProvider>
          <Box sx={{ margin: "5px" }} />
          <Button onClick={handleClose}>Search</Button>
        </Box>
        <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.id}`;
            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <AddModal
                    fetchData={fetchData}
                    Name={value.name}
                    itemQty={value.quantity}
                  />
                }
                disablePadding
              >
                <ListItemButton onClick={() => handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>

                  <ListItemText
                    id={labelId}
                    primary={
                      value.name.length > 20
                        ? `${value.name.slice(0, 17)}...`
                        : value.name
                    }
                    sx={{
                      flex: "1 1 60%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  />
                  <ListItemText
                    id={labelId}
                    primary={value.quantity}
                    sx={{
                      flex: "0 0 20%",
                      minWidth: "60px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}
export default Index;
