import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { db, resetDatabase } from "../models/db";

export function ResetDatabaseButton() {
  return (
    <button
      className="large-button"
      onClick={() => {
        resetDatabase();
      }}
    >
      <FontAwesomeIcon icon={faDatabase} /> Reset Database
    </button>
  );
}
