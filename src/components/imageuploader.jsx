import { useEffect, useRef, useState } from "react";

const MAX_FILE_SIZE_MB = 5;

function ImageUploader() {
  const [previewUrl, setPreviewUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // useRef gives us direct access to the hidden <input type="file" />.
  const fileInputRef = useRef(null);

  // Release the temporary preview URL when it changes or the component unmounts.
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // The custom button "clicks" the hidden input for the user.
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return; // user cancelled the dialog

    if (!selectedFile.type.startsWith("image/")) {
      setErrorMessage("Please choose an image file (JPG, PNG, GIF, WebP).");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrorMessage(`Image must be smaller than ${MAX_FILE_SIZE_MB} MB.`);
      return;
    }

    setErrorMessage("");
    setFileName(selectedFile.name);
    setPreviewUrl(URL.createObjectURL(selectedFile));

    // Reset the input so choosing the same file again still fires onChange.
    event.target.value = "";
  };

  const handleRemoveImage = () => {
    setPreviewUrl("");
    setFileName("");
    setErrorMessage("");
  };

  return (
    <div className="uploader">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />

      <div className={`preview ${previewUrl ? "preview--filled" : ""}`}>
        {previewUrl ? (
          <img src={previewUrl} alt={`Preview of ${fileName}`} />
        ) : (
          <p className="preview__empty">
            No image selected yet.
            <br />
            Choose one to see it here.
          </p>
        )}
      </div>

      {fileName && <p className="uploader__filename">{fileName}</p>}
      {errorMessage && (
        <p className="uploader__error" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="uploader__actions">
        <button type="button" className="btn btn--primary" onClick={handleUploadClick}>
          {previewUrl ? "Change image" : "Upload image"}
        </button>
        {previewUrl && (
          <button type="button" className="btn btn--ghost" onClick={handleRemoveImage}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;