import React, { useState } from 'react';
import ImageViewer from './components/ImageViewer.jsx';
import TranscriptionEditor from './components/TranscriptionEditor.jsx';

const paradigmLogo = new URL('../logo/Paradigm.png', import.meta.url).href;

export default function App() {
  const [imageUrl, setImageUrl] = useState(
    'https://raw.githubusercontent.com/joelmanjet/transcription-review/refs/heads/main/readmepic/tx_100.jpg',
  );
  const [mdUrl, setMdUrl] = useState(
    'https://raw.githubusercontent.com/joelmanjet/transcription-review/refs/heads/main/readmepic/tx_100.md',
  );

  return (
    <div className="concordia-shell">
      <header className="concordia-header">
        <div className="header-left">
          <div className="brand">
            <img className="brand-logo" src={paradigmLogo} alt="Paradigm" />
            <span className="brand-sub">Transcription Review</span>
          </div>
          <div className="asset-meta">Page #100</div>
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
            </div>
            <TranscriptionEditor mdUrl={mdUrl} setMdUrl={setMdUrl} />
          </section>
        </div>
      </main>
    </div>
  );
}