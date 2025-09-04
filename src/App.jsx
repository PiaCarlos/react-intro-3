import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header'
import {Entry} from './components/Entry'
import marker from './images/marker.png'
import mount from './images/mount-fuji.jpg'
import data from './data/data'

export default function App() {


  const EntryElements = data.map((entry) => {
      return (
        <Entry
         key={entry.id}
         img={mount}
         title={entry.title}
         country={entry.country}
         googleMapsLink={entry.googleMapsLink}
         dates={entry.dates}
         text={entry.text}    
          />
      )
  })

  console.log(EntryElements)
  
  return (
    <main>
      <Header />
      {EntryElements}
    </main>
  )
}


