import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {motion} from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { menuVariants } from "@/utils/variants";
import { useRouter } from "next/router";
import { useLazyEffect } from "@/hooks/useLazyEffect";

interface FullMenuProps {
    handleClose: () => any;
}

const FullMenu: React.FC<FullMenuProps> = ({handleClose}) => {
    const router = useRouter();
    const [currOpen, setCurrOpen] = useState(true);
    const [heightDone, setHeightDone] = useState(false);
    const {width} = useWindowSize();
    const isSmall = width < 992;

    const removeOverflow = () =>
        document.querySelector("body")?.classList.remove("overflow-hidden");



}

export default FullMenu