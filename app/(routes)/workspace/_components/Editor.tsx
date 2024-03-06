"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import LinkTool from "@editorjs/link";
// @ts-ignore
import RawTool from "@editorjs/raw";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import NestedList from "@editorjs/nested-list";
// @ts-ignore
import CodeTool from "@editorjs/code";
// @ts-ignore
import SimpleImage from "@editorjs/simple-image";
// @ts-ignore
import Table from "@editorjs/table";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "../../dashboard/_components/FileList";

const rawDocument = {
  "time": 1550476186479,
  "blocks": [
    {
      "data": {
        "text": "Your Document Title Here...",
      },
      "level": 4,
      "type": "header",
    },
  ],
};

function Editor({ onSaveTrigger, fileId, fileData }: { onSaveTrigger:any, fileId:any, fileData:FILE }) {

  const [document, setDocument] = useState(rawDocument);
  const ref = useRef<EditorJS>();

  const updateDocument = useMutation(api.files.updateDocument);

  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);

  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
        code: CodeTool,
        table: Table,
        image: SimpleImage,
        raw: RawTool,
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header"
          }
        },
        linkTool: {
          class: LinkTool,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
      },
      holder: "editorjs",
      data: fileData.document ? JSON.parse(fileData.document) : rawDocument,
    });
    ref.current = editor;
  };

  const onSaveDocument = () => {
    if(ref.current) {
      ref.current.save().then((outputData) => {
        //console.log('Article data: ', outputData);
        updateDocument({
          _id: fileId,
          document: JSON.stringify(outputData),
        }).then((res) => {
          toast("Document is Updated !!!", {
            description: "Your Document is saved on our server."
          })
        }, (e) => {
          toast("Something went wrong !!!", {
            description: "Server Error, Please Wait and Retry."
          })
        });
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    }
  };

  return (
    <div>
      <div id="editorjs" className="ml-7 max-md:ml-5"></div>
    </div>
  );
}

export default Editor;
