import React from 'react';
import Overview from './Overview';
import '../styles/Saved.css'; // Make sure to import your CSS
import '../styles/Saved.css';

function Saved() {
  return (
    <div>
      <Overview>
      <div className="col-8 saved-container">
  <div className="saved-empty-state text-center">
    <div className="icon-container mb-3">
      <i className="fas fa-heart fa-3x text-danger"></i>
    </div>
    <h4 className="fw-bold mb-3">Nothing’s here (yet)</h4>
    <p className="text-muted">
      New items from your saves will show up here. Tap the heart on items,
      searches, and sellers to save them!
    </p>
  </div>
</div>

      </Overview>
    </div>
  );
}

export default Saved;
