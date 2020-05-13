import React from 'react'
import Modal from 'react-modal'
import { Anchor } from '@components/Menu/styles'

import { Header, Title, ModalList, ModalListItem, CloseAnchor } from './styles'

const customStyles = {
    content: {
        top: '20%',
        left: 'calc(50% - 150px)',
        right: 'auto',
        bottom: 'auto',
        width: 300
    }
}

const MobileModal = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
            <Header>
                <Title>Menu</Title>
                <CloseAnchor onClick={closeModal} href="#">
                    - Fechar
                </CloseAnchor>
            </Header>

            <ModalList>
                <ModalListItem>
                    <Anchor exact to="/">
                        - Dragon List
                    </Anchor>
                </ModalListItem>
                <ModalListItem>
                    <Anchor to="/new">- Create Dragon</Anchor>
                </ModalListItem>
                <ModalListItem>
                    <Anchor to="/logout">- Logout</Anchor>
                </ModalListItem>
            </ModalList>
        </Modal>
    )
}

export default MobileModal