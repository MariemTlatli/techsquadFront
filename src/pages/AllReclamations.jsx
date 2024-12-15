import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccordionUsage from "../components/accordion";
import FreeSoloCreateOption from "../components/searchfiels";
import axios from "axios";

function AllReclamations() {
  const [Reclamations, setReclamations] = useState([]);

  // Fetch reclamations from the backend when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:8000/tickets") // Adjust to your API URL
      .then((response) => {
        setReclamations(response.data); // Assuming your API sends an array of reclamations
      })
      .catch((error) => {
        console.error("Error fetching reclamations:", error);
      });
  }, []);

  return (
    <div>
      <div style={{ padding: "40px 0px" }}>
        Search by email : <FreeSoloCreateOption />
      </div>
      <div>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "space",
          }}
        >
          <Button variant="outlined" style={{ width: "23%" }} color="error">
            INIT
          </Button>
          <Button variant="outlined" style={{ width: "23%" }} color="success">
            Reviwed
          </Button>
          <Button
            variant="outlined"
            style={{ width: "23%" }}
            sx={{ color: "#f57c00", borderColor: "#f57c00" }}
          >
            Pending
          </Button>
          <Button
            variant="outlined"
            style={{ width: "23%" }}
            sx={{ color: "#607D8B", borderColor: "#607D8B" }}
          >
            Resolved
          </Button>
        </Stack>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Reclamations</h3>

        {Reclamations.map((e) => {
          return (
            <AccordionUsage
              name={e.name}
              message={e.message}
              Status={e.Status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllReclamations;
