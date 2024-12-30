import React, { useState, useEffect } from 'react';

interface SetImageUploadModalProps {
  onClose: () => void;
}

export const SetImageUploadModal = ({ onClose }: SetImageUploadModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // URL for live preview
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 500 * 1024) { // Check file size (500 KB max)
        setError('File size exceeds 500KB. Please upload a smaller image.');
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file.');
        return;
      }
      setError(null);
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setError('Please select an image before submitting.');
      return;
    }
    // TODO: Implement the logic for uploading the image to the server or IPFS
    alert('Image uploaded successfully!');
    onClose();
  };

  // Cleanup the object URL when the component unmounts or when a new image is selected
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Upload Vault Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {previewUrl && (
          <div className="mb-4">
            <img
              src={previewUrl}
              alt="Selected Preview"
              className="w-full h-auto rounded-md"
            />
          </div>
        )}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};
