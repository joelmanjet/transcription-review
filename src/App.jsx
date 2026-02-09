import React, { useState } from 'react';
import ImageViewer from './components/ImageViewer.jsx';
import TranscriptionEditor from './components/TranscriptionEditor.jsx';

export default function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [mdUrl, setMdUrl] = useState('');

  return (
    <div className="concordia-shell">
      <header className="concordia-header">
        <div className="header-left">
          <div className="brand">
            <span className="brand-mark">Concordia</span>
            <span className="brand-sub">Transcription Review</span>
          </div>
          <div className="asset-meta">Christian Fleetwood diary • Page 36</div>
        </div>
        <div className="header-actions">
          <button className="btn btn-ghost">How-To Guide</button>
          <button className="btn btn-primary">Campaign Tips</button>
        </div>
      </header>

      <main className="concordia-main">
        <div className="concordia-split">
          <section className="panel panel--viewer">
            <div className="panel-title">Source Image</div>
            <ImageViewer imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </section>

          <section className="panel panel--editor">
            <div className="editor-header">
              <div>
                <div className="status-badge">Needs review</div>
                <p className="editor-instructions">
                  Check this transcription thoroughly. Accept if correct.
                </p>
              </div>
              <div className="contrib-count">Registered Contributors: 2</div>
            </div>
            <TranscriptionEditor mdUrl={mdUrl} setMdUrl={setMdUrl} />
          </section>
        </div>
      </main>
    </div>
  );
}