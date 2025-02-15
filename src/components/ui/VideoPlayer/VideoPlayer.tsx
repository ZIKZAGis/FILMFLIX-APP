import { FC, useEffect, useState } from "react"
import styles from "./VideoPlayer.module.scss"
import classNames from "classnames"

const VideoPlayer: FC = () => {
    const [scriptHtml, setScriptHtml] = useState<String>('')

    useEffect(() => {
        const dataUrl = window.location.href;

        fetch(
            "//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru="+
            dataUrl,
        )
        .then(res => res.text())
        .then((data) => {
            const matches = data.match(/<iframe.*<\/iframe>/gm)

            if (matches && matches.length > 1) {
                setScriptHtml(matches[1])
            } else {
                console.error("No iframes found or not enough iframes in the response.");
                setScriptHtml('')
            }
        })
        .catch((error) => console.error("Error fetching or processing data:", error))
    }, [scriptHtml])

    return (
        <div 
            className={classNames('uitools', styles.video)}
            id="videoplayers" 
            dangerouslySetInnerHTML={{__html: scriptHtml}}
        ></div>
    )
}

export default VideoPlayer