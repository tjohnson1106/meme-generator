import React, { useState, useEffect } from "react";
import { template } from "handlebars";

export function Main() {
  const [templates, setTemplates] = useState([]);
  const [templates, setTemplates] = useState([null]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setTemplates(response.data.memes))
    );
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* {template} */}
      {!template &&
        templates.map((template) => {
          return (
            <img
              style={{ width: 200 }}
              src={template.url}
              alt={template.name}
              key={template.id}
              onClick={() => {
                setTemplate(template);
              }}
            />
          );
        })}
    </div>
  );
}
