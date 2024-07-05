"use client";

import React, { useState } from "react";
import content from "@/content/content.json";
import axios from "axios";
import { InteractionProps } from "@microlink/react-json-view";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

export default function Admin() {
  const [editableContent, setEditableContent] = useState(content);

  const handleSave = () => {
    try {
      const parsedContent = editableContent;
      // Assuming you have a function to save parsedContent
      let data = JSON.stringify(parsedContent);

      let config = {
        method: "post",
        url: "/api/hello",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      alert("Invalid JSON format!");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-50 text-black p-5">
      <div className="border p-5 rounded-xl shadow-xl bg-white">
        <ReactJson
          iconStyle="triangle"
          displayDataTypes={false}
          quotesOnKeys={false}
          name="Landing Page"
          displayObjectSize={false}
          src={content}
          enableClipboard={false}
          onEdit={(edit: InteractionProps) => {
            setEditableContent(edit.updated_src as any);
          }}
        />
      </div>

      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
