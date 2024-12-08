import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Iconify from "../iconify/iconify";
import { Stack } from "@mui/material";

export default function AccordionCustom() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<Iconify icon="mingcute:down-line" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Stack display="flex">
            <Typography typography="h3" fontWeight={600} color="textPrimary">
              My calendar
            </Typography>
            <Typography typography="body1">Upcoming Interviews</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
