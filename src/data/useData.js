import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeDetail from '../components/HomeDetail';
import AboutDetail from '../components/AboutDetail'
import SkillDetail from '../components/SkillDetail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GirlFriendDetail from '../components/GirlFriendDetail';
import ProjectDetail from '../components/ProjectDetail';
import {Button} from '@mui/material';
let startLove=new Date(2020,9,7).getTime()
let now=new Date().getTime()
let t=now-startLove;
let oneYr=365*24*60*60*1000
let oneMonth=30*24*60*60*1000
let oneday=24*60*60*1000
let yr= Math.floor(t/oneYr);
let mth= Math.floor((t%oneYr)/oneMonth)
let dy=Math.floor((t%oneMonth)/oneday)
function useData() {
    const [years,setYears]=useState(new Date().getFullYear()-2002)
    const [anni,setAnni]=useState({yr,mth,dy})
    const [currentLanguage,setCurrentLanguage]=useState(["React","Laravel","Linux Basic"])
    const [futureLanguage,setFutureLanguage]=useState(["React Native","PHP Deep learning"]);
    const [language,setLanguage]=useState("all");
    const content={
      about:`
      I'm Aung Kaung Khant and ${years} years old.Lived in Pyin Oo Lwin.I was born in Hpa-an.
      My parents are U Khin Maung Than and Daw Aye Aye Win.I have one sibling,his name is Myo Kyaw Hein.Now.I have girlfriend and name is Nan Su San Htike.I prefer playing football.I'm studying in University Of Computer Studies Lashio.Studying Programming Language since 2020.I'm currenty Learning are
      ${currentLanguage.map((lan)=>`${lan}`)}.Future Learning are ${futureLanguage.map((lan)=>`${lan}`)}.I want to work with Vue and Laravel.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt deserunt nemo, expedita sequi aut voluptatibus earum. Similique harum, voluptatum molestias beatae dolores qui et cupiditate recusandae error eligendi repudiandae?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt deserunt nemo, expedita sequi aut voluptatibus earum. Similique harum, voluptatum molestias beatae dolores qui et cupiditate recusandae error eligendi repudiandae?
      `
    }
    const gf={about:`
        Hey,My Baby name is Nan Su San Htike.I have called Thae Nge Lay since fell in love.

    `}
    const itemData = [
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/248399769_655294635876881_1591229155432087390_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFW_-oAIC5Mtdz3wGtl2aerbOwMjDoSgals7AyMOhKBqQ2N_cSSq3HTqvDxyCYB_iw6sppXMIwhtRGI5XiLS4jv&_nc_ohc=egMX4Y43iOQAX9pTo0t&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=20a9e695ab3c93cd2badd98e8ebd7c47&oe=61AFEAB7',
        title: '1',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/248229591_601993027897724_6430704464904760711_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFEQvhW2X000f0K-uxSeMnwevf_vc4Pp2969_-9zg-nbz9BuwvzCJpAsXdCbd0hqxE4ey7GcoBRCyXikKPwehUX&_nc_ohc=b4xfY45g_DMAX-TfWun&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=5b658270238b798e8821160cfa16ec51&oe=61B28329',
        title: '2',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s240x240/245262398_4440209259402284_5278713393828971361_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFgRNF_lgRlcTwHdrRLdYaeyctx75rUs3HJy3HvmtSzcQguKoEsITisNhYjponJR1N8gdW2dFgqeYSZbJkanP4Q&_nc_ohc=1G98DP65naAAX9JU-Ec&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=5070715d408df81cdc2daa915fd6de3a&oe=61B0AAC3',
        title: '3',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/240114686_972011030306317_6656241831569689193_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE_BuL7jtfyTqhcFLi4FNVzgt5XQAWy09eC3ldABbLT1_FCSs7d_6eU-hzf7pO28W-UYu7VanilVjs8FCo4KJqV&_nc_ohc=pf8ZtlI0cQwAX_Q2j1t&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=87e414a8c458aba4259b2e704a40ec41&oe=61B06112',
        title: '4',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/233895314_202341298530093_9116044855632918767_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHZyMkUz6NEPxQkpJS6c_cUmzKPsQCb1dKbMo-xAJvV0gt5IlHswQCXUCR6CMCBQgynnFyDGbrwIS82DF-Ceo1a&_nc_ohc=qEZW6WGexXoAX99Yn8g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9c82c2619c4be9c40ca557314138e197&oe=61B10664',
        title: '5',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/210378847_1149064065573982_7454968843691070174_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEPXUzrvovced_2TJZvi3DtnLfDZjeoGPect8NmN6gY9836f06gI5HxnYXkyoSjvVuR_vZb_tubh3AZQ3UL08hQ&_nc_ohc=AYFWjm5aM7QAX8F05s4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9e963a7947b5fd695657c87348485c39&oe=61AF8DD9',
        title: '6',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/210998540_138395284985470_4465776275618696262_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFOIMz3KVUZSDgHS0utl_KeuJKufrJFb7i4kq5-skVvuELHjmXiW4xWJFZnTaaj9MrxaefzvBe9S1xf5BpZhnDn&_nc_ohc=hN9viwgFAIsAX9aGhmP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=cd409e575cc2449186bf6eb6a5ace784&oe=61AF0A9B',
        title: '7',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/234587858_1385164738550967_7291441856320428066_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFZ2ChVkxskli9v1r2OxouKxy_--xaACJPHL_77FoAIkwKOmtCUDVNBk8_3I4ht6HMFfOx-nvZ4vpTTJuAZMa50&_nc_ohc=JgozyeBDVFUAX9VOmvF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=ea035f1aa5125b0c1806b31033f6dece&oe=61B0672F',
        title: '8',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/239675104_1298477507238837_6999762204845605126_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeECiK897P-S43jpy95uGR2iDpMr8oQupngOkyvyhC6meMOXq2wzkl0fhfjBxSlKn4Nk4FAPzA5GRJ-0jzO6gu1w&_nc_ohc=ysB7YA5lCMMAX9LPWNt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=149b5b64b61e947246d3f7af11314410&oe=61B2125E',
        title: '9',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s280x280/242130979_535625917736304_5976575167606887713_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEO27XjY5TeLLSbn4Y4RHhCNv6YIXyoUuw2_pghfKhS7KKRWOvTE--SKSCN9dwDdxrkrF6_pOCtaTc74ytxJHCM&_nc_ohc=mOZr9KhZItUAX8ovUNL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=356de6f1a8d7abf95f796861608f2bf8&oe=61AFB7A4',
        title: '10',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/248516823_405834947678565_6810954247266514788_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEjFejqpraYoChbvDx7ghcZfc4rXYohAAR9zitdiiEABN9OYcHBX8H0DfexxAZGdD59XYmumt1Nzzavu0HX4Psb&_nc_ohc=Gl5PFM6s_RoAX_7vujw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4df2f2ae7d5e8a99d9cb55e6def59019&oe=61B262F7',
        title: '11',
      },
      {
        img: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/247584501_576743753401327_6089023174578606685_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFEb-l5WgYzrfnafJi0LifM4pxrxRHSg_finGvFEdKD95jcdHY971dm0voyjaru6QfyG_4c7P2MzRI9kYD9Fm-a&_nc_ohc=NNRxvNP9xoYAX9Vhp_M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=3d1b624989b3e093f3ff674e1f9ea678&oe=61B269E4',
        title: '12',
      },
    ];
    const languages=[
      {key:"all",value:"All"},
      {key:"js",value:"JS"},
      {key:"php",value:"PHP"},
      {key:"vuejs",value:"Vue Js"},
      {key:"laravel",value:"Laravel"},
      {key:"reactjs",value:"React"},
    ]
    const changeLanguage=(lan)=>{
        setLanguage(lan)
    }
    const btns=languages.map((lan)=>(
      <Button key={lan.key} onClick={()=>changeLanguage(lan.key)}>{lan.value}</Button>
    ))
    const buttons = [
      ...btns
    ];
    const projects=[
      {category:"js",links:"http://jsproject",name:"Jspj"},
      {category:"php",links:"http://phpproject",name:"Phppj"},
      {category:"vuejs",links:"http://vuejsproject",name:"Vuepj"},
      {category:"reactjs",links:"http://reactjsproject",name:"Reactpj"},
      {category:"laravel",links:"http://ro-system.mms-student.com",name:"Restaurant Order System"},
      
    ]
    const options=[
        {value:"home",label:"Home",icon:<HomeIcon />,component:<HomeDetail />},
        {value:"about",label:"About",icon:<InfoIcon />,component:<AboutDetail content={content}/>},
        {value:"skill",label:"Skills",icon:<LaptopIcon />,component:<SkillDetail />},
        {value:"girl friend",label:"Girl Friend",icon:<FavoriteBorderIcon />,component:<GirlFriendDetail gf={gf} anni={anni} itemData={itemData}/>},
        {value:"project",label:"Project",icon:<GitHubIcon />,component:<ProjectDetail buttons={buttons} projects={projects} language={language}/>},
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
