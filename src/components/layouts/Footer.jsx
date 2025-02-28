import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import facebook from "../../assets/img/facebook.svg";
import github from "../../assets/img/github.svg";
import twitter from "../../assets/img/twitter.svg";
import discord from "../../assets/img/discord.svg";
import bitcoin from "../../assets/img/bitcoin.svg";
import share from "../../assets/img/share.svg";
import logo from "../../assets/img/logo.svg";
import coin1 from "../../assets/img/image 93.svg";
import coin2 from "../../assets/img/image 94.svg";
import coin3 from "../../assets/img/image 95.svg";
import coin4 from "../../assets/img/image 96.svg";
import coin5 from "../../assets/img/image 97.svg";
import coin6 from "../../assets/img/image 98.svg";
import coin7 from "../../assets/img/image 99.svg";
import coin8 from "../../assets/img/image 100.svg";
import coin9 from "../../assets/img/image 101.svg";
import coin10 from "../../assets/img/image 102.svg";
import coin11 from "../../assets/img/image 104.svg";
import coin12 from "../../assets/img/image 84.svg";
import coin13 from "../../assets/img/image 85.svg";
import coin14 from "../../assets/img/image 86.svg";
import coin15 from "../../assets/img/image 87.svg";
import coin16 from "../../assets/img/image 88.svg";
import coin17 from "../../assets/img/image 89.svg";
import coin19 from "../../assets/img/image 91.svg";
import coin20 from "../../assets/img/image 92.svg";

import logo2 from "../../assets/img/Logo/logo (7).png";
import logo4 from "../../assets/img/Logo/logo (1).png";
import logo5 from "../../assets/img/Logo/logo2.png";

import logo7 from "../../assets/img/Logo/logo3.png";
import logo8 from "../../assets/img/Logo/logo4.png";

import logo10 from "../../assets/img/Logo/logo (4).png";
import logo11 from "../../assets/img/Logo/logo5.svg";
import logo12 from "../../assets/img/Logo/logo (5).png";
import logo13 from "../../assets/img/Logo/logo 6.png";
import logo14 from "../../assets/img/Logo/logo (6).png";
import logo15 from "../../assets/img/Logo/logo7.png";
import logo16 from "../../assets/img/Logo/logo1.png";
import logo17 from "../../assets/img/Logo/logo8.png";
import logo18 from "../../assets/img/Logo/logo (8).png";
import logo19 from "../../assets/img/Logo/logo9.png";
import logo20 from "../../assets/img/Logo/logo (9).png";
import logo22 from "../../assets/img/Logo/logo (10).png";
import logo24 from "../../assets/img/Logo/logo (11).png";
import logo25 from "../../assets/img/Logo/logo (12).png";
import logo28 from "../../assets/img/Logo/logo (20).png";

import "@splidejs/react-splide/css";
import RegisterEmail from "../signs/RegisterEmail";

export const Footer = () => {
    const { t } = useTranslation();

    const expandMenuState = useSelector((state) => state.openMenuState.value);
    const isLogin = useSelector((state) => state.loginState.isLogin);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");

    const iconsArray = [
        coin1,
        coin2,
        coin3,
        coin4,
        coin5,
        coin6,
        coin7,
        coin8,
        coin9,
        coin10,
        coin11,
        coin12,
        coin13,
        coin14,
        coin15,
        coin16,
        coin17,
        coin19,
        coin20,
    ];

    const Logos = [
        {
            Logo: logo2,
            Url: "",
        },
        {
            Logo: logo4,
            Url: "",
        },
        {
            Logo: logo5,
            Url: "",
        },
        {
            Logo: logo7,
            Url: "",
        },
        {
            Logo: logo8,
            Url: "",
        },
        {
            Logo: logo10,
            Url: "",
        },
        {
            Logo: logo11,
            Url: "",
        },
        {
            Logo: logo12,
            Url: "",
        },
        {
            Logo: logo13,
            Url: "",
        },
        {
            Logo: logo14,
            Url: "",
        },
        {
            Logo: logo15,
            Url: "",
        },
       
        
    ];

    const signUp = () => {
        if (!isLogin) {
            setType("signup_email");
            setOpen(!isLogin);
        }
    }
    return (
        <>
            <footer className={`pt-16 mt-5`}>
                {/* <div className='content-footer-area px-3 md:px-3 max-w-[1430px] mx-auto'> */}
                <div className="content-footer-area px-3 md:px-8 mx-auto footers py-8">
                    <div className="why-area grid lg:grid-cols-1 gap-6 lg:gap-6">
                        <div className="left-area-footer-why">
                            
                            <div>
                               
                                
                                   
                                    <h1 className="text-black font-bold flex items-center justify-center text-[18px] mb-5">
                                        <a
                                            href="/"

                                        >
                                           Welcome To Lucky8
                                        </a>
                                    </h1>

                                   
                            
                                
                                <p>{t("We're not just another name in the online gaming world; we represent the future of entertainment. We bring you a fantastic mix of casino games, sports betting, and a variety of other interactive experiences—all powered by the revolutionary Web3 technology. With LuckyGao, we invite you on a gaming adventure that's both exciting and thrilling, offering an absolute blend of fun and the joy of winning!")}</p>
                            </div>
                            <div className="right-area mt-5">
                                
                                <p className="text-black font-bold flex items-center justify-center mb-5">{t("Join Lucky8")}</p>
                            </div >
                            {!isLogin &&
                            <p className="flex items-center justify-center">
                            <button className="bg-black text-[var(--logoutBg)] mt-5 font-bold py-2 px-4 rounded" onClick={() => signUp()}>
                                Join Now
                            </button></p>}
                        </div>

                        <div className="right-area-footer ">
                            {/* <h1 className="text-black font-bold">{t("Help us")}</h1>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder={t("Found a bug!")}
                            className="w-full h-32 mt-4 mb-7 rounded-lg resize-none px-4 py-3 text-black"
                        /> */}
                            {/* <div className="mb-8">
                                <h1 className="mb-4 font-bold">{t("Join Our Community")}</h1>
                                <div className="flex items-center gap-3 social-icons-footer">
                                  
                                    <a href="/">
                                        <img src={twitter} alt="twitter icon" />
                                    </a>
                                    <a href="/">
                                        <img src={facebook} alt="facebook icon" />
                                    </a>
                                    <a href="/">
                                        <img src={discord} alt="discord icon" />
                                    </a>
                                    
                                </div>
                            </div> */}
                           
                              
                                <div>
                                    <h1 className="text-black font-bold flex items-center justify-center mb-3">{t("Email us")}</h1>
                                    <p className="text-black font-bold flex items-center justify-center mb-3">
                                        <a
                                            href="mailto:lucky8@gmail.com"
                                            className="text-black text-base mb-0"
                                        >
                                            lucky8@gmail.com
                                        </a>
                                    </p>

                                </div>
                           
                         
                        </div>
                    </div>
                    {/* 
                <div className="logo-footer-area grid lg:grid-cols-2 gap-6 lg:gap-36 ">
                </div> */}
                    {/* 
                <div className="list-area-footer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                    <ul>
                        <li className="head">{t("Casino")}</li>
                        <li>
                            <a href="/">{t("Casino Home")}</a>
                        </li>
                        <li>
                            <a href="/">{t("Live Casino")}</a>
                        </li>
                        <li>
                            <a href="/">{t("New Releases")}</a>
                        </li>
                        <li>
                            <a href="/">{t("Table Game")}</a>
                        </li>
                    </ul>

                  
                    


                </div> */}

                   
                    <div className=" mt-12">
                        <h1 className="text-black font-bold mb-5 flex items-center justify-center text-[18px]">Top Providers</h1>
                        <div className="icons-wrapper flex flex-wrap gap-9 justify-center">
                            {Logos.map((item, index) => (
                                <a key={index} href={item.Url}>
                                    <img
                                        src={item.Logo}
                                        alt="Logo"
                                        className="h-10 "
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                   

                    <div className="copyright-area mt-20  flex items-center justify-center mt-8">
                        <p>© 2025 Lucky8. {t("All rights reserved")} | Privacy Policy | Terms & Conditions</p>
                       
                    </div>
                </div>
            </footer>
            {!isLogin &&
                <RegisterEmail
                    open={open}
                    setOpen={setOpen}
                    type={type}
                    setType={setType}
                />}
        </>
    );
};
