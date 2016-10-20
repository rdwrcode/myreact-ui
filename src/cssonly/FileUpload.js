import React from 'react';
import './FileUpload.css';

const FileUpload = () => (
  <div className="fileupload">
    <form>
      <input type="file" accept="image/*" aria-label="select file to upload"/>
      <input type="submit"/>
    </form>
  </div>
);

export default FileUpload;
