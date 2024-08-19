import style from "@/assets/styles/pc/nav.module.scss"
import { useState } from "react";
import { PlayCircleFilled } from '@ant-design/icons';
const Header = () => {
    const [list, setList] = useState([
        { name: "视频中", icon: "" },
        { name: "动作", icon: "" },
        { name: "动作", icon: "" },
        { name: "动作", icon: "" },
        { name: "动作", icon: "" },
        { name: "动作", icon: "" },
        { name: "动作", icon: "" },

    ])

    const [routerActive, setRouterActive] = useState(0)
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (index: any) => {
        setHoveredItemId(index);

    };
    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    return (
        <div className={style.leftNavWrap}>
            <div className={style.logo}> </div>
            <div className={style.navWrap}>
                {list.map((item, index) => (
                    <div key={index}
                        className={`
                            ${style.navItemWrap} 
                            ${routerActive == index ? style.routerActive : ""}
                            ${hoveredItemId == index ? style.active : ""}
                        `}
                        onMouseEnter={(event) => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={style.text}> {item.name}</div>
                        <div className={style.icon}>
                            <PlayCircleFilled className={style.icons} />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Header
