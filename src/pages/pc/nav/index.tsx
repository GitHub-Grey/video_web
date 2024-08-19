import style from "@/assets/styles/pc/nav.module.scss"
import { useState, useEffect } from "react";
import { PlayCircleFilled } from '@ant-design/icons';
import data from "./data"
const Header = () => {
    type Item = {
        id: number|string;
        name: string;
      };

    const [list, setList] = useState<Item[]>([])
    const [routerActive, setRouterActive] = useState(0)
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (index: any) => {
        setHoveredItemId(index);

    };
    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    const getMenu = () => {
        const newMemu = data.map(item => {
            return { name:item.params.channel_name,id:item.params.channel_id  }
        })
        setList([...newMemu])
    }

    useEffect(() => {
        getMenu()
    },[])

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
