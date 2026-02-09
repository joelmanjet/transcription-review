import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Edit3, CheckCircle } from 'lucide-react';

export default function TranscriptionEditor({ mdUrl, setMdUrl }) {
  const [markdown, setMarkdown] = useState(
    '### OCR Transcription\n\nEdit this text to correct any errors.',
  );
  const [isEditing, setIsEditing] = useState(false);
  const [inputUrl, setInputUrl] = useState(mdUrl);

  return (
    <div className="editor">
      <div className="editor-url">
        <input
          className="input"
          placeholder="Enter markdown URL..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={() => setMdUrl(inputUrl)} className="btn btn-secondary">
          Fetch
        </button>
      </div>

      <div className="editor-body" data-color-mode="light">
        <div className="editor-scroll">
          {isEditing ? (
            <MDEditor value={markdown} onChange={setMarkdown} height="100%" preview="edit" />
          ) : (
            <div className="editor-preview">
              <MDEditor.Markdown source={markdown} />
            </div>
          )}
        </div>

        <div className="editor-actions">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`btn ${isEditing ? 'btn-ghost' : 'btn-primary'}`}
          >
            {isEditing ? 'Cancel' : <><Edit3 size={18} /> Edit</>}
          </button>
          <button onClick={() => setIsEditing(false)} className="btn btn-accept">
            <CheckCircle size={18} /> Accept
          </button>
        </div>
      </div>
    </div>
  );
}