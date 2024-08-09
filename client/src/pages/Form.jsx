import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiConfig from "../config/config";

export default function Form() {
    const [formData, setFormData] = useState({ title: "", desc: "", auth: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(formData);
      try {
        const resp = await apiConfig.post("/api/post", formData );
        navigate('/login');
      } catch (error) {
        setError(error.respone.data.message);
      }
    };
  return (
    <div className="flex flex-col gap-5">
      <h1 className="capitalize flex flex-row items-center justify-center text-2xl font-bold">
        create new blog
      </h1>
      <div className="w-full">
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="capitalize font-bold">
              Title
            </label>
            <input
              className="border border-gray-200"
              type="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="capitalize font-bold">
              Descriptions
            </label>
            <input
              className="border border-gray-200"
              type="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="capitalize font-bold">
             Author
            </label>
            <input
              className="border border-gray-200"
              type="auth"
              name="auth"
              value={formData.auth}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
