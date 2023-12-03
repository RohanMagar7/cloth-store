"use client"
import Main from "./main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Home() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route exact path="/main" element={<Main/>}/>
  </Routes>
  </BrowserRouter>
    <Main/>
    </>
  );
}
