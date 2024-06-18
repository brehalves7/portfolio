import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/brehalves7" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/breno-alves-190a59165/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/breh.alvess/" },
    
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials