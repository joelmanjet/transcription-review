import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Sun, Image as ImageIcon } from 'lucide-react';

export default function ImageViewer({ imageUrl, setImageUrl }) {
  const [inputUrl, setInputUrl] = useState(imageUrl);
  const [brightness, setBrightness] = useState(100);
  const [zoom, setZoom] = useState(1);

  return (
    <div className="viewer">
      <div className="viewer-url">
        <input
          className="input input--dark"
          placeholder="Enter image URL (jpg, png, pdf)..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button
          onClick={() => setImageUrl(inputUrl)}
          className="btn btn-primary"
        >
          Load
        </button>
      </div>

      <div className="viewer-controls">
        <button
          onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
          className="btn-icon"
          title="Zoom out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={() => setZoom((prev) => Math.min(3, prev + 0.1))}
          className="btn-icon"
          title="Zoom in"
        >
          <ZoomIn size={18} />
        </button>
        <div className="viewer-slider">
          <Sun size={16} />
          <input
            type="range"
            min="50"
            max="200"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
            className="range"
          />
        </div>
      </div>

      <div className="viewer-stage">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Source"
            style={{
              filter: `brightness(${brightness}%)`,
              transform: `scale(${zoom})`,
            }}
          />
        ) : (
          <div className="viewer-empty">
            <ImageIcon size={40} />
            <p>Awaiting image URL</p>
          </div>
        )}
      </div>
    </div>
  );
}