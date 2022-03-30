import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContactForm from "./ContactForm/ContactForm";

export default {
  title: "ContactForm",
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

export const Primary: ComponentStory<typeof ContactForm> = () => (
  <ContactForm primary>ContactForm</ContactForm>
);
