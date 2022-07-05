import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react';
import { Header } from '../components/Header';
import { ContainerHome } from '../styles/Global';
import Modal from 'react-modal'
import { SectionIntro } from '../components/SectionIntro';


export default function Home() {

  return (
    <ContainerHome>
      <Header />
      <SectionIntro/>
    </ContainerHome>
  )
}

if (typeof(window) !== 'undefined') {
  Modal.setAppElement('body')
}
