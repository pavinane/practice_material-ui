import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ButtonTypes = () => {
  return (
    <Stack spacing={4} justifyContent="center" alignItems="center">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="text">Text button</Button>
        <Button variant="contained">Contained button</Button>
        <Button variant="outlined">Outline button</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Primary button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary button
        </Button>
        <Button variant="contained" color="warning">
          Warning button
        </Button>
        <Button variant="contained" color="error" size="small">
          Error button
        </Button>
        <Button variant="contained" color="info" size="medium">
          Info button
        </Button>
        <Button variant="contained" color="success" size="large">
          Success button
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="info" startIcon={<SendIcon />}>
          Send button
        </Button>
        <Button variant="contained" color="info" endIcon={<SendIcon />}>
          Send button
        </Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          aria-label="alignment button group"
          color="warning"
        >
          <Button onClick={() => alert("click left button")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ButtonTypes;
