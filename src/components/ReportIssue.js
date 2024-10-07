import React, { useState } from "react";
import axios from "axios";
import "./ReportIssue.css";
import Contact from "./Contact";

const ReportIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fileUploads, setFileUploads] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [visibleUpload, setVisibleUpload] = useState(1); // Control how many file inputs are visible

  // Function to handle file uploads
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file && file.size > 250 * 1024 * 1024) {
      alert("File size cannot exceed 250MB");
      return;
    }

    const newFileUploads = [...fileUploads];
    newFileUploads[index] = file;
    setFileUploads(newFileUploads);

    if (index + 1 < 5 && file) {
      setVisibleUpload(index + 2);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    fileUploads.forEach((file, index) => {
      if (file) {
        formData.append(`file${index + 1}`, file);
      }
    });

    try {
      const token = localStorage.getItem("token"); // Fetch the authentication token from localStorage
      if (!token) {
        alert("You need to log in to report an issue.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/reports",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      console.log(response.data);
      alert("Issue reported successfully!");
    } catch (err) {
      console.error("Error reporting issue", err);
      alert("Failed to report issue. Please try again.");
    }
  };

  return (
    <div className="report-container">
      <div className="form-wrapper">
        <h2 className="form-title">Report an Issue</h2>
        <p className="form-mission">
          Help us maintain accountability and transparency by reporting issues
          affecting your community. Your report helps us create better
          solutions.
        </p>
        <form
          onSubmit={handleSubmit}
          className="issue-form"
          encType="multipart/form-data"
        >
          <input
            type="text"
            placeholder="Issue Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input-field"
          />
          <textarea
            placeholder="Issue Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="textarea-field"
          />
          <input
            type="text"
            placeholder="Location (e.g., Address, Nigeria)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="input-field"
          />

          {/* File Upload Inputs */}
          <div className="file-upload">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className={`file-input ${
                  index < visibleUpload ? "" : "hidden"
                }`}
              >
                <label htmlFor={`file${index + 1}`}>
                  Upload File {index + 1} (Optional):
                </label>
                <input
                  type="file"
                  id={`file${index + 1}`}
                  accept="image/*,video/*"
                  onChange={(e) => handleFileChange(e, index)}
                  className="file-input-field"
                />
              </div>
            ))}
          </div>

          <button type="submit" className="submit-button">
            Submit Report
          </button>
        </form>
      </div>
      <Contact />
    </div>
  );
};

export default ReportIssue;
