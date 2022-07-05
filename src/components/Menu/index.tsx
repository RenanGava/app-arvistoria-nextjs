import { MenuContainer } from './style'
import { CgMenu } from 'react-icons/cg'
import Modal from 'react-modal';
import { useCallback, useEffect, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector'

import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { useWidth } from '../../Hooks/useWidth';



export function Menu() {
    const [isOpen, setIsOpen] = useState(true)
    const [close, setClose] = useState(false)
    const width = useWidth()

    console.log(width);

    
    function onRequestOpen() {
        setIsOpen(true)
        setClose(true)
    }

    function onRequestClose() {
        console.log('oi');
        
        setIsOpen(false)
        setClose(false)
    }

    useEffect(()=>{
        function close(){
            setClose(false)
        }
        width > 720 && onRequestClose()
    })
    

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
