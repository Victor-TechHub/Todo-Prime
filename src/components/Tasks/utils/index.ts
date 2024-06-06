import { FaStar } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { RiCalendarTodoFill } from "react-icons/ri";
import { ImCalendar } from "react-icons/im";

export const navs = [
    {
        name: "All",
        icon: IoIosListBox
    },
    {
        name: "Starred",
        icon: FaStar
    },
    {
        name: "Today",
        icon: RiCalendarTodoFill
    },
    {
        name: "Week",
        icon: ImCalendar
    },
]