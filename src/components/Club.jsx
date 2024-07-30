import React from "react";

function Club({club}) {
  return (
    <section>
        <h2>{club.name}</h2>
        <p>Abierto entre semana {club.openOnweekdays ? "SI" : "NO"}</p>
        <p>Abierto fines de semana {Club.openOnweekdays ? "SI" : "NO"}</p>

    </section>
  );
}

export default Club;
