import React from "react";

// COMPONENTS
import Layout from "../layout";
import ContactForm from "../components/ContactForm";
import EmbedCalender from "../components/EmbedCalender";

const Contact = () => {
	return (
		<Layout>
			<ContactForm />
      <EmbedCalender />
		</Layout>
	);
};

export default Contact;
