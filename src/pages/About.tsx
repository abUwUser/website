import { useMemo } from 'react';
import Popup from 'reactjs-popup';
import Spoiler from "../components/Spoiler"
import useStyleifyMode from '../hooks/useStyleifyMode';
import getAge from "../utils/getAge"
import styles from "./About.module.scss"

export default () => {
    const age = useMemo(() => getAge(new Date("2005-11-27")), [])
    const styleify = useStyleifyMode()

    return <div id={styles["about"]}>
        <div className="card">
            <h1>About</h1>
            <table>
                <tr>
                    <td>Username</td>
                    <Popup trigger={<td><span>A user</span></td>} position="top left" closeOnDocumentClick arrow={false} className={styleify ? "irlnamepopup" : ""}>
                        <Spoiler>My IRL name is </Spoiler>
                        <span className={styles["nodoxing"]}>Pedro Santos Cartaxo Barbosa (pls dont dox me)</span>
                    </Popup>
                </tr>
                <tr>
                    <td>Current age</td>
                    <td>{age}</td>
                </tr>
                <tr>
                    <td>Mastered technologies</td>
                    <td>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>(S)CSS</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </td>
                </tr>
                <tr>
                    <td>Training technologies</td>
                    <td>
                        <li>Vite</li>
                        <li>Jest / Vitest</li>
                        <li>React Router</li>
                        <li>React Query</li>
                    </td>
                </tr>
                <tr>
                    <td>Awards</td>
                    <td>
                        <li>Standout Project HappyCode. Age: 9 years old</li>
                        <li>OBA Bronze medal, from 2022. Age: 16 years old</li>
                    </td>
                </tr>
                <tr>
                    <td>?????? Loves</td>
                    <td>
                        <li>Modding Discord</li>
                        <li>Linux</li>
                        <li>Working on existing projects</li>
                        <li><img src='https://cyber.dabamos.de/88x31/minecraft.gif' /></li>
                        <li><img src="https://cyber.dabamos.de/88x31/vscbutton.gif" /></li>
                        <li><a href='https://github.com/catppuccin/catppuccin' target="_blank">Catppuccin</a></li>
                    </td>
                </tr>
            </table>
        </div>
    </div>
}