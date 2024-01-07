import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ScanBase from "../Pages/ScanBase";
import Kurator from "../Pages/Kuratorlar";

function RoutePage() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/scanbase" element={<ScanBase/>} />
            <Route path="/kurator" element={<Kurator />} />
        </Routes>
        </>
    )
}

export default RoutePage