import mongoose from "mongoose";

export function connect() {
  mongoose.connect(
    "mongodb://localhost:27017/crud-api?readPreference=primary&ssl=false"
  );
  const db = mongoose.connection;

  db.once("open", console.log.bind(console, "connected to database"));

  db.on("error", console.error.bind(console, "connection error"));
}
