import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AlertDialog from "./NotificationDialog";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MdMarkEmailUnread } from "react-icons/md";

export default function AccordionUsage(props) {
  const { name, message ,
    Status } = props;
  const [open, setOpen] = React.useState(false);
  const getStatusComponent = (status) => {
    switch (status) {
      case "PENDING":
        return <div style={{ color: "#f57c00" }}>pending</div>;
      case "RESOLVED":
        return <div style={{ color: "#607D8B" }}>accepted</div>;
      case "INIT":
        return <div style={{ color: "red" }}>NEW</div>;
      default:
        return <div style={{ color: "#c88080" }}>pending</div>;
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100%", // Customize the width
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h3>Send by</h3>
          {name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                backgroundColor: "#E7E6E6FF",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {message}
            </div>
            <h3>Select Departmet</h3>
            <select
              name=""
              id=""
              style={{ width: "50%", padding: "10px ", borderRadius: "7px" }}
            >
              <option value="hr">HR</option>
              <option value="technical">Technical</option>
              <option value="busniss">Busniss</option>
            </select>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#5c5b5b">
            cancel
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
            style={{
              backgroundColor: "#AB9ADCFF",
              color: "#fff",
              width: "30%",
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <AlertDialog open={open} ticket={{ name, message }} />
      <Accordion style={{ borderLeft: "10px solid #BE6868FF", padding: "7px" ,width:"70%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         
         <div
  style={{
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "10px",

    alignItems: "center",
     // Fix for horizontal spacing
  }}
>
  <MdMarkEmailUnread size={20} color="#c88080" />
  <span>{name}</span>
  <div>12-2-2024</div>
  <div>{getStatusComponent(Status)}</div>

</div>

         
        </AccordionSummary>

        <AccordionDetails>
        {message.length > 10 ? message.slice(0, 30) + " ..." : message}

        </AccordionDetails>

        <AccordionActions>
          <Button onClick={handleClickOpen}>see more</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
