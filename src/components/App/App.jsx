"use client";
import { InterFont } from "@/utils/font";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = ({ children }) => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        newestOnTop={false}
        hideProgressBar={false}
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <style jsx global>
        {`
          :root {
            --font-inter: ${InterFont.style.fontFamily};
          }
        `}
      </style>
      <div>
        {children}
      </div>
    </div>
  );
};
