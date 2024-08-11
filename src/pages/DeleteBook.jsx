import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-backend-iika.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("an error occured please check console");
        console.log(error.message);
      });
  };

  return (
    <div className=" p-4">
      <BackButton></BackButton>
      <h1 className=" text-3xl my-4 ">Delete Book</h1>
      {loading ? <Spinner></Spinner> : ""}
      <div className=" flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className=" text-2xl ">
          Are you Sure You Want to delete this book
        </h3>
        <button
          className=" p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
