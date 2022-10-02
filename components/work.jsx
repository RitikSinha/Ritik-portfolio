import React, { useEffect, useState } from "react";
import Card from "./Card";
export default function Work({ data }) {
  return (
    <section id="work" className=" py-12">
      <div className="md:px-32 md:my-12 md:grid grid-cols-3">
        {data.map((c) => (
          <Card
            key={c.id}
            img={c.img}
            github={c.github}
            demo={c.demo}
            text={c.text}
          />
        ))}
      </div>
    </section>
  );
}
