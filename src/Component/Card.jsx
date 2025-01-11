import React, { useState } from 'react'

const Card = ({detail}) => {
    console.log(detail);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChar,setSelectedChar] = useState(null);

    const openModal = (char) => {
        setSelectedChar(char);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
  return (
    <div className='character'>
        {!detail ? "" : 
        detail.map((curChar) => {
            return (
                <div key = {curChar.cell} >
                    <img src={curChar.picture.large} alt="" />
                    <p>{curChar.name.first+" "+curChar.name.last}</p>
                    <button onClick={() => openModal(curChar)}>About</button>
                    
                    {isModalOpen && selectedChar && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="close" onClick={closeModal}>
                                    &times;
                                </span>
                                <img src={selectedChar.picture.large} alt="" />
                                <h2>
                                    {selectedChar.name.first +
                                        " " +
                                        selectedChar.name.last}
                                </h2>
                                <p>
                                    <strong>Date of Birth:</strong>{" "}
                                    {new Date(
                                        selectedChar.dob.date
                                    ).toLocaleDateString()}
                                </p>
                                <p>
                                    <strong>Age:</strong> {selectedChar.dob.age}
                                </p>
                                <p>
                                    <strong>Email:</strong> {selectedChar.email}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {selectedChar.phone}
                                </p>
                                <p>
                                    <strong>Location:</strong>{" "}
                                    {`${selectedChar.location.city}, ${selectedChar.location.country}`}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )
        })
        }
    </div>
  )
}

export default Card