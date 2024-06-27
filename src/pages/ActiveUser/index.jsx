import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ActiveUser() {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  const handleActiveUser = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5510/v1/auth/verify",
        data: {
          token,
        },
      });

      // if (response.status === 201) {
      //   toast.success("Successful");
      //   navigate("/");
      // }
    } catch (error) {
      // toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <button onClick={() => handleActiveUser()}>Active</button>
    </div>
  );
}
