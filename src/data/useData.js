import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';

import HomeDetail from '../components/HomeDetail';
import AboutDetail from '../components/AboutDetail'
function useData() {
    const [years,setYears]=useState(new Date().getFullYear()-2002)
    const [currentLanguage,setCurrentLanguage]=useState(["React","Laravel","Linux Basic"])
    const [futureLanguage,setFutureLanguage]=useState(["React Native","PHP Deep learning"])
    const content={
      about:`
      I'm Aung Kaung Khant and ${years} years old.Lived in Pyin Oo Lwin.I was born in Hpa-an.
      My parents are U Khin Maung Than and Daw Aye Aye Win.I have one sibling,his name is Myo Kyaw Hein.Now.I have girlfriend and name is Nan Su San Htike.I prefer playing football.I'm studying in University Of Computer Studies Lashio.Studying Programming Language since 2020.I'm currenty Learning are
      ${currentLanguage.map((lan)=>`${lan}`)}.Future Learning are ${futureLanguage.map((lan)=>`${lan}`)}.I want to work with Vue and Laravel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt deserunt nemo, expedita sequi aut voluptatibus earum. Similique harum, voluptatum molestias beatae dolores qui et cupiditate recusandae error eligendi repudiandae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt deserunt nemo, expedita sequi aut voluptatibus earum. Similique harum, voluptatum molestias beatae dolores qui et cupiditate recusandae error eligendi repudiandae?
      `
    }
    const options=[
        {value:"home",label:"Home",icon:<HomeIcon />,component:<HomeDetail />},
        {value:"about",label:"About",icon:<InfoIcon />,component:<AboutDetail content={content}/>},
        {value:"skill",label:"Skill",icon:<LaptopIcon />},
        {value:"project",label:"Project",icon:<GitHubIcon />},
      ]
      
    return [options]
}

export default useData
