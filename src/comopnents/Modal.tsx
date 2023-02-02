import React, {useState} from 'react';

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<Props> = ({isOpen, closeModal, title, children}) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    const handleCloseModal = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
            setIsModalOpen(false);
        }
    };

    return isOpen ? (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button onClick={closeModal}>&times;</button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;