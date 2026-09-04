import React, {
  useEffect,
  useState
} from "react";

import { apiUrl, assetUrl } from '../services/api';
import "./returneditems.css";

function ReturnedItems() {

  const [items, setItems] =
    useState([]);
    const [selectedImage, setSelectedImage] =
  useState(null);
    
  useEffect(() => {

    fetch(
      apiUrl('/returned-items')
    )
      .then((res) => res.json())
      .then((data) => setItems(data));

  }, []);

  return (
    <div className="returned-page">

      <h1>
        âœ… Recovered Items
      </h1>

      <p className="returned-subtitle">
        Successfully returned to owners
      </p>

      <div className="returned-grid">

        {items.length === 0 && (
        <div className="empty-state">
            No recovered items yet.
        </div>
        )}

        {items.map((item) => (

          <div
            className="returned-card"
            key={item.id}
          >

            <img
            src={assetUrl(item.image_path)}
            alt={item.title}
            onClick={() =>
                setSelectedImage(
                assetUrl(item.image_path)
                )
            }
            />

            <div className="returned-content">

              <h2>
                {item.title}
              </h2>

              <span className="returned-badge">
                Returned Successfully
              </span>

              <p>
                ðŸ“‚ {item.category}
              </p>

              <p>
                ðŸ“ {item.location}
              </p>

            </div>

          </div>

        ))}

      </div>
{selectedImage && (
  <div
    className="image-modal"
    onClick={() =>
      setSelectedImage(null)
    }
  >
    <img
      src={selectedImage}
      alt="preview"
      className="modal-image"
    />
  </div>
)}
    </div>
  );
}

export default ReturnedItems;
