// src/nodes/BaseNode.js
import { Handle, Position } from "reactflow";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { hoverStyle } from "../styles/hoverStyle";

export const BaseNode = ({
  title,
  formFields = [],
  handles = [],
  style = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Paper
      elevation={3}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...hoverStyle(isHovered), ...style }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "0.5rem",
          color: "#1e40af",
          backgroundColor: "",
          height: "70px",
          borderRadius: "4px",
          // width: '222px',
        }}
      >
        <strong>{title}</strong>
      </div>

      {/* Form Section */}
      <div>
        {formFields.map(({ label, element }, idx) => (
          <div
            key={idx}
            style={{
              marginTop: "6px",
              color: "black",
              backgroundColor: "",
              borderRadius: "4px",
            }}
          >
            <label>
              {label} {element}
            </label>
          </div>
        ))}
      </div>

      {/* Handles */}
      {handles.map(({ type, position, id, top }, idx) => (
        <Handle
          key={idx}
          type={type}
          position={position}
          id={id}
          style={{ top }}
        />
      ))}
    </Paper>
  );
};
