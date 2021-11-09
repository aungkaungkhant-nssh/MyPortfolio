import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';

import HomeDetail from '../components/HomeDetail';
import AboutDetail from '../components/AboutDetail'
import SkillDetail from '../components/SkillDetail';
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
        {value:"skill",label:"Skills",icon:<LaptopIcon />,component:<SkillDetail />},
        {value:"project",label:"Project",icon:<GitHubIcon />},
      ]
    const skills=[
      {language:"HTML",value:"80",color:"error",percent:"80%"},
      {language:"CSS",value:"60",color:"secondary",percent:"60%"},
      {language:"JS",value:"70",color:"warning",percent:"70%"},
      {language:"PHP",value:"50",color:"primary",percent:"50%"},
      {language:"Vue Js",value:"75",color:"inherit",percent:"75%"},
      {language:"React Js",value:"65",color:"primary",percent:"65%"},
      {language:"Laravel",value:"60",color:"error",percent:"60%"}
    ]
    return [options,skills]
}

export default useData
