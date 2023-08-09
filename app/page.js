// "use client";
// import React, { useEffect, useState } from "react";
import Brand from "../components/Brand";
import CardEvent from "../components/CardEvent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import Stories from "../components/Stories";
// import { getData } from "../utils/fetchData";

async function getData() {
  const response = await fetch("http://localhost:9000/api/v1/events", {
    cache: "no-store",
  });
  const data = await response.json();
  // console.log(data);
  return data.data;
  // setData(data.data);
}

export default async function Home() {
  const data = await getData();
  // console.log(data);
  // const [data, setData] = useState([]);
  // console.log("data");
  // console.log(data);
  // data.map((date, index) => {
  //   console.log(date);
  // });
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch("http://localhost:9000/api/v1/events");
  //     const data = await response.json();
  //     // console.log(data);
  //     setData(data.data);
  //   }
  //   getData();
  // }, []);
  return (
    <>
      <Header />
      <Brand />
      <CardEvent data={data} title="Featured Events" subTitle="Grow Today" />
      <Stories />
      <Statistics />
      <Footer />
    </>
  );
}
