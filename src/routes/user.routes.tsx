import { Route, Routes } from "react-router-dom";
import { Local } from "../pages/local";



export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Local />} />
    </Routes>
  );
}
