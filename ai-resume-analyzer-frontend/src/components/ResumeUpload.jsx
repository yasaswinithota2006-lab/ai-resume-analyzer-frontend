import { useState } from "react";
import API from "../services/api";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await API.post("/resume/analyze", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Analyze Resume</button>
    </form>
  );
}

export default ResumeUpload;