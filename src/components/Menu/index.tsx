import { MenuContainer } from './style'
import { CgMenu } from 'react-icons/cg'
import Modal from 'react-modal';
import { useState } from 'react';

import { IoClose } from "react-icons/io5";
import Link from 'next/link';



export function Menu() {
    const [isOpen, setIsOpen] = useState(true)
    const [close, setClose] = useState(false)

    function onRequestOpen() {
        setIsOpen(true)
        setClose(true)
    }

    function onRequestClose() {
        setIsOpen(false)
        setClose(false)
    }

    return (
        <MenuContainer>
            <ul>
                <li><Link href="#">Contato</Link></li>
                <li><Link href="#">Local</Link></li>
                <li><Link href="#">Itens Obrigatórios</Link></li>
            </ul>

            <div>
                {!close ? <CgMenu onClick={onRequestOpen} /> : <IoClose onClick={onRequestClose} />}
                <Modal
                    overlayClassName='react-modal-overlay'
                    className='react-modal-content'
                    isOpen={isOpen}
                    onRequestClose={onRequestClose}

                >
                    <ul>
                        <li><Link href="#">Contato</Link></li>
                        <li><Link href="#">Local</Link></li>
                        <li><Link href="#">Itens Obrigatórios</Link></li>
                    </ul>
                </Modal>
            </div>
        </MenuContainer>
    )
}
