import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <>
            <button className="btn btn-warning bagBtn" data-toggle="modal" data-target="#exampleModal">add to bag</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Warning</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            You have no
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;