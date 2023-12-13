import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media screen and (max-width: 900px){
    width: 550px;
  height: 350px;
  };
  @media screen and (max-width: 600px){
    width: 450px;
  height: 250px;
  };
  @media screen and (max-width: 450px){
    width: 350px;
  height: 200px;
  };
  @media screen and (max-width: 360px){
    width: 300px;
  height: 170px;
  };
  @media screen and (max-width: 315px){
    width: 250px;
  height: 160px;
  };
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;

`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #ffa101;;
    color: #fff;
    border: none;
  };
  @media screen and (max-width: 600px){
    margin-bottom: 5px;
    font-size:12px;
  };
  @media screen and (max-width: 450px){
    margin-bottom: 2px;
    font-size:9px;
  };
  @media screen and (max-width: 360px){
    margin-bottom: 2px;
    p{font-size:9px;}
    button{padding: 6px 8x;}
  };
  @media screen and (max-width: 315px){
    margin-bottom: 1px;
    font-size:7px;
    button{padding: 4px 6px;}
  };
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  @media screen and (max-width: 600px){
    width: 22px;
  height: 22px;
  };
  @media screen and (max-width: 450px){
    position: absolute;
  top: 8px;
  right:8px;
    width: 14px;
  height: 14px;
  };
  @media screen and (max-width: 315px){
    position: absolute;
  top: 8px;
  right:8px;
    width: 10px;
  height: 10px;
  };
`;

export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };


    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>

                            <ModalImg src={require('../images/pancakes.jpg')} alt='camera' />
                            <ModalContent >
                                <h1>Are you ready?</h1>
                                <p>Get our exclusive food.</p>
                                <button ><a href="signup">Join Now</a></button>
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />

                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};