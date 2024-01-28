import React from "react";
import Header from "../Components/ContactComponents/Header";
import Form from "../Components/ContactComponents/Form";
import Address from "../Components/ContactComponents/Address";

export default function Contact() {
  return (
    <div className="container mx-auto px-10 mt-36">
      <header>
        <Header />
      </header>
      <main>
        <Form />
      </main>
      <section>
        <Address />
      </section>
    </div>
  );
}
