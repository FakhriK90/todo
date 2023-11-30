import React from "react";
import { Button } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.facebook.com/Fa5rinovic/"
        target="_blank"
        rel="noreferrer"
      >
        <Button circular color="facebook" icon="facebook" />
      </a>
      <a
        href="https://www.facebook.com/Fa5rinovic/"
        target="_blank"
        rel="noreferrer"
      >
        <Button circular color="instagram" icon="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/fakhri-abousaoud-kahouach-162171166/"
        target="_blank"
        rel="noreferrer"
      >
        <Button circular color="linkedin" icon="linkedin" />
      </a>
      <a
        href="https://www.facebook.com/Fa5rinovic/"
        target="_blank"
        rel="noreferrer"
      >
        <Button circular color="whatsapp" icon="whatsapp" />
      </a>
      <a
        href="https://myaccount.google.com/profile?pli=1"
        target="_blank"
        rel="noreferrer"
      >
        <Button circular color="google plus" icon="google plus" />
      </a>
    </div>
  );
};

export default Footer;
