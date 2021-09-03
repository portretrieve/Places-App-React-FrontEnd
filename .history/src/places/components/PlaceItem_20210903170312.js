import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-Hook";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";

import "./PlaceItem.css";

function PlaceItem(props) {
  const AUTH = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, errorState, sendRequest, clearError } = useHttpClient();

  const [showMapModel, setShowMapModel] = useState(false);
  const [showDeleteModal, setShowDeleteModel] = useState(false);

  const openMapHandler = () => setShowMapModel(true);

  const closeMapHandler = () => setShowMapModel(false);

  const showDeleteWarningHandler = () => {
    setShowDeleteModel(true);
  };

  const cancelDeleteWarningHandler = () => {
    setShowDeleteModel(false);
  };
  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        "http://localhost:5000/api/places/" + props.id,
        "DELETE"
      );

      props.onDelete(props.id);
    } catch (error) {}

    setShowDeleteModel(false);
  };

  return (
    <React.Fragment>
      <ErrorModal error={errorState} onClear={clearError} />
      <Modal
        show={showMapModel}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showDeleteModal}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Sure, you wanna delete? It can't be undone later!</p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {AUTH.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {AUTH.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default PlaceItem;
