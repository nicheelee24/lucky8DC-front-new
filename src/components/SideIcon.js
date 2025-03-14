import { useState, useEffect } from "react";
import { GetIcon } from "./GetIcon";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { reverse } from "../redux/reducers/openMenu";

import {
    Sport,
    EGame,
    Slot,
    FishingGame,
    Thai,
    Table,
    LiveCasino,
    // Lotto,
    Bingo,
    Chicken,
} from "../config";
import { setNavBar } from "../redux/reducers/navBar";

const CONTACT_US_LINE_APP_INVITE_URL = "https://lin.ee/5WaeTDb";

export const SideIcon = ({ text, type, index, expand }) => {
    const navigate = useNavigate();
    const navIndex = useSelector((state) => state.navBarState.index);
    const [isHover, setIsHover] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        // 👇️ scroll to top on page load
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    function isMobileDevice() {
        const mobileWidth = 768;
        if (window.innerWidth < mobileWidth) return true;
        else return false;
    }

    function renderContentByIndex(ind) {
        switch (ind) {
            case 1:
                // Sports
                return Sport.map((item, index) => (
                    <img
                        key={index}
                        src={item.imageUrl}
                        alt={item.imageUrl}
                        className="w-[70%] hover:brightness-150 m-auto pr-[20px] pb-[30px] pt-[30px]"
                        onClick={() => {
                            navigate(`/ESPORTS/${item.platform}`, {
                                replace: true,
                            });
                        }}
                    />
                ));
           
           
            default:
                break;
        }
    }

    function handleClick(type, index) {
        switch (type) {
            case "lobby":
                dispatch(setNavBar({ index: 0 }));
                navigate(`/`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "Promotion":
                navigate(`/promotion`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "VIP":
                navigate(`/vip`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "Support":
                navigate(`/support`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "Language":
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "ContactUs":
                window.open("https://gmail.com", "_blank");
                break;
            case "FinancialReport":
                navigate(`/financial-report`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "Account":
                navigate(`/account`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "MyBetList":
                navigate(`/mybet`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            case "Announce":
                navigate(`/announce`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
            default:
                // navigate(`/${type}/ALL`, { replace: true })
                // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                switch (type) {
                   
                    case "ESPORTS":
                        dispatch(setNavBar({ index: 1 }));
                        break;
                   
                   
                    default:
                        dispatch(setNavBar({ index: 0 }));
                        break;
                }
                navigate(`/${type}`, { replace: true });
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                break;
        }

        if (type != "Language" && isMobileDevice()) dispatch(reverse());
    }

    return (
        <div
            className={`${
                expand
                    ? "bg-[var(--secondaryColor)] pl-5 "
                    : "flex justify-center pl-0 "
            } ${
                index === navIndex
                    ? "!bg-[var(--logoutBg)] !text-black-800 m-5 rounded-md"
                    : "custom-hover-bg bg-black rounded-md hover:text-black"
            } flex flex-row items-center cursor-pointer h-[46px] mx-auto  my-1`}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => handleClick(type, index)}
        >
            <GetIcon type={type} active={isHover}  />
            <h1
              className={`flex flex-col-1 text-[15px] text-center ${
                index === navIndex ? "text-black-800" : "text-white"
              } ${expand ? "ml-[25px]" : "hidden"}`}
            >
                {text}
            </h1>
          
        </div>
    );
};
