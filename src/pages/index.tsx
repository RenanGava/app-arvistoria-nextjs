import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react';
import { Header } from '../components/Header';
import { ContainerHome } from '../styles/Global';
import Modal from 'react-modal'


export default function Home() {

  return (
    <ContainerHome>
      <Header />
    </ContainerHome>
  )
}

if (typeof(window) !== 'undefined') {
  Modal.setAppElement('body')
}
