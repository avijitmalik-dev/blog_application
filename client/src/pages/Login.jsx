
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiConfig from "../config/config";

export default function Login() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(formData);
      try {
        const resp = await apiConfig.post("/auth/register", formData );
        navigate('/login');
      } catch (error) {
        setError(error.respone.data.message);
      }
    };
  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-10 h-lvh">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tempora quia quae maiores ipsam atque voluptatibus, doloribus
            voluptates! Sed voluptate ipsa ad alias qui ipsum quam porro quod
            explicabo molestias.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="capitalize flex flex-row items-center justify-center text-2xl font-bold">new user register</h1>
          <div className="w-full">
            <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="capitalize font-bold" >Email</label>
                <input className="border border-gray-200" type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="capitalize font-bold" >Password</label>
                <input className="border border-gray-200" type="password" name="password" value={formData.password} onChange={handleChange} />
              </div>
            </form>
          </div>
          <div>
            <button className="bg-blue-700 px-10 w-full">Submit</button>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <p>new user?</p>
            <Link to="/register" className="text-blue-700 underline">Register</Link>
        </div>
        </div>
       
      </div>
    </>
  );
}
