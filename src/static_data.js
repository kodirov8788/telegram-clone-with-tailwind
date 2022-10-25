import { FaSave, FaUserAlt } from "react-icons/fa";
import {
  AiFillSetting,
  AiOutlineQuestionCircle,
  AiOutlineBug,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { GiNightSleep } from "react-icons/gi";
import { VscVersions } from "react-icons/vsc";
import { MdArchive } from "react-icons/md";

export const Static = [
  {
    id: 1,
    icon: <FaSave />,
    listName: "Saved Messages",
  },
  {
    id: 2,
    icon: <MdArchive />,
    listName: "Archived Chats",
  },
  {
    id: 3,
    icon: <FaUserAlt />,
    listName: "Contacts",
  },
  {
    id: 4,
    icon: <AiFillSetting />,
    listName: "Settings",
  },
  {
    id: 5,
    icon: <GiNightSleep />,
    listName: "Night Mode",
  },
  {
    id: 6,
    icon: <AiOutlineQuestionCircle />,
    listName: "Telegram Features",
  },
  {
    id: 7,
    icon: <AiOutlineBug />,
    listName: "Report Bug",
  },
  {
    id: 8,
    icon: <VscVersions />,
    listName: "Switch to K Version",
  },
  {
    id: 9,
    icon: <VscVersions />,
    listName: "Switch to Old Version",
  },
  {
    id: 10,
    icon: <AiOutlinePlusCircle />,
    listName: "Install App",
  },
];
