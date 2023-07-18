import React, { useState, useRef } from "react";
import Select from "react-dropdown-select";
import { downloadTimeSheet } from "@core/data.utils";
import { useDispatch } from "react-redux";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [fileTypeCheck, setFileTypeCheck] = useState(null);
  const inputRef = useRef(null);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setFileTypeCheck(null);
      setSuccessMsg(null);
    }
  };

  const fileUploadExcel = () => {
    setSuccessMsg(null);
    inputRef.current.click();
  };

  const fType = {
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "doc",
    plain: "text",
    "x-zip-compressed": "zip",
    pdf: "pdf",
    javascript: "js",
    html: "html",
    png: "png",
    xml: "xml",
    jpeg: "jpeg",
    css: "css",
    gif: "gif",
  };
  const handleUploadClick = () => {
    const formData1 = new FormData();
    if (!file) {
      setFileTypeCheck(null);
      return;
    } else {
      let fileName = file.type.split("/");
      let fileType = fileName[1];
      if (fType[fileType] == "excel") {
        setFileTypeCheck(fType[fileType]);
      } else {
        setFileTypeCheck(fType[fileType]);
        return;
      }
    }
    formData1.append("file", file);
    const createXHR = () => new XMLHttpRequest();
    fetch("http://in-v-docker1:8200/upload-file?file", {
      body: formData1,
      createXHR,
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res == "success") {
          setFileTypeCheck(null);
          setSuccessMsg(res);
          // setFile(null);
        }
      });
  };

  const options = [
    {
      value: 1,
      label: "Europe",
    },
    {
      value: 2,
      label: "Dubai",
    },
    {
      value: 3,
      label: "Shanghai",
    },
    {
      value: 4,
      label: "Hong Kong",
    },
    {
      value: 5,
      label: "Tokyo",
    },
    {
      value: 6,
      label: "Philippines",
    },
    {
      value: 7,
      label: "Estonia",
    },
    {
      value: 8,
      label: "Vietnam",
    },
    {
      value: 9,
      label: "India",
    },
  ];
  const dispatch = useDispatch();
  const templateDownload = (e) => {
    console.log("typeof", e);
    if (e.length === 0) return;
    let name = e[0].label;

    downloadTimeSheet(dispatch, name).then((res) => {
      if (res) {
        window.open(res.url);
        return res;
      }
    });
  };

  return (
    <div className="fileUploadPage">
      <h1 className="fileUploadPage__heading">File Upload/Download Template</h1>
      <div className="row">
        <div className="col-12 col-xl-9 col-lg-10">
          <div className="fileUpload">
            <h4 className="fileUpload__heading">File Upload</h4>
            <button
              className="fileUpload__input"
              type="file"
              onClick={fileUploadExcel}
            >
              <span className="icon-file-excel"></span>
              <br />
              <br />
              <span className="fileUpload__input--browse">Browse</span> and
              select your files
            </button>
            <input
              hidden
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
            <div className="fileUpload__filename">
              {file && !successMsg && `${file.name}`}
              <br />{" "}
              {fileTypeCheck !== "excel" &&
                fileTypeCheck !== null &&
                !successMsg && (
                  <span className="filetype-error">
                    "EXCEL" only accepted other documents/files are not
                    accepted!
                  </span>
                )}{" "}
              {successMsg && `${" File Uploaded Successfully..."}`}
            </div>

            <button
              className={
                successMsg
                  ? "fileUpload__button success"
                  : "fileUpload__button "
              }
              title={!file ? "Please select file..." : "Upload"}
              disabled={!file || successMsg ? "disabled" : ""}
              onClick={handleUploadClick}
            >
              {successMsg ? "Done" : file ? "Upload" : "Please Select File"}
            </button>
          </div>
        </div>
        <div className="col-12 col-xl-3 col-lg-2">
          <div className="templateDownload">
            <p className="download-icon">
              <span className="icon-download"></span>
            </p>
            <p className="selectbranch">Template excel download</p>
            <Select
              options={options}
              onChange={templateDownload}
              placeholder="Select/Type your branch..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
