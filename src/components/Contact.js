import React, { useState } from "react";

const initialstate = {
  name: "",
  email: "",
  message: "",
};
export default function Contact() {
  const [user, setUser] = useState(initialstate);
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://atveek-backend-api.onrender.com/api/review",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid data");
      console.log("invalid data");
    } else {
      window.alert("send successfully");
      console.log("send successfully");
    }
    setUser(initialstate);
  };

  return (
    <div className="bg-black w-full h-auto pb-20">
      <h1 className="relative font-sans text-white m-auto text-[30px] text-center p-9 tracking-wide  after:content-[''] after:w-[72px] after:h-[9.33px] after:absolute after:bg-[#A700E1] after:top-[100px] after:right-[47%] after:rounded-[222px]">
        Contact
      </h1>
      <p className="w-[960px] m-auto h-[50.94px] text-center text-neutral-500 text-base font-normal font-serif leading-9">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <br />
      <div className="flex flex-row justify-center items-center">
        <div className="w-[349px] pb-20">
          <div className="text-white text-3xl font-normal font-sans">Mail</div>
          <div className="ml-6  mt-3 text-white text-base font-normal font-sans">
            atveekdungarani2021@gmail.com
          </div>

          <div className=" text-white text-base font-normal font-sans ml-6  mt-2">
            dungaraniatveek@gmail.com
          </div>
          <div className=" text-white text-xl font-normal font-sans  mt-8">
            Phone No.
          </div>
          <div className=" text-white text-base font-normal font-sans ml-6  mt-3">
            +91 9924944940
          </div>
        </div>
        <div className="w-[auto] h-[auto] bg-[#181823] ml-24 rounded-3xl py-5 px-9">
          <form action="POST" onSubmit={submit}>
            <label
              htmlFor="Name"
              className="text-center text-white text-xl font-normal font-sans tracking-wide"
            >
              Name
            </label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              value={user.name}
              placeholder="Name"
              className="w-[537px] h-[44.65px] bg-white bg-opacity-30 rounded-[11px] ml-16 mt-5 p-3  text-white text-xl font-normal font-sans tracking-wide"
            />
            <br />
            <label
              htmlFor="Email"
              className="text-center text-white text-xl font-normal font-sans tracking-wide"
            >
              Email
            </label>

            <input
              name="email"
              onChange={handleChange}
              value={user.email}
              type="text"
              placeholder="Email@gmail.com"
              className="w-[537px] h-[44.65px] bg-white bg-opacity-30 rounded-[11px] ml-16 mt-5 p-3  text-white text-xl font-normal font-sans tracking-wide"
            />
            <br />
            <label
              htmlFor="Email"
              className="text-center text-white text-xl font-normal font-sans tracking-wide"
            >
              Message{" "}
            </label>
            <textarea
              name="message"
              value={user.message}
              onChange={handleChange}
              className="w-[537px] h-[200px] bg-white bg-opacity-30 rounded-[11px] ml-6 mt-5 p-3  text-white text-xl font-normal font-sans tracking-wide no-scrollbar"
              placeholder="Message"
            ></textarea>
            <br />
            <input
              type="submit"
              className=" text-neutral-400 cursor-pointer text-[28px] font-normal font-sans ml-36 mt-5 w-[141px]  h-12  m-auto text-center bg-yellow-900 rounded-[19px] shadow-inner border-2"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
