import React from "react";
import './Table.css'
export default function Table(){
    return(
        <table>
        <tr>
            <th>Teams</th>
            <th>City</th>
            <th>Home ground</th>
            <th>Debut</th>
            <th>Owner</th>
        </tr>
        <tr>
            <td>Chennai Super kings</td>
            <td>Chennai, Tamilnadu</td>
            <td>M.A.Chidambaram Stadium</td>
            <td>2008</td>
            <td><ul>
                <li>N Srinivasan</li>
            </ul></td>
        </tr>
        <tr>
            <td>Delhi Capitals</td>
            <td>New Delhi,Delhi</td>
            <td>Arun Jaitly Stadium</td>
            <td></td>
            <td><ul>
                <li>Sajjan Jindal</li>
                <li>G.M.Rao</li>
            </ul></td>
        </tr>
        <tr>
            <td>Gujarath  Titans</td>
            <td>Ahemedabad, Gujarath</td>
            <td>Narendra Modi Stadium</td>
            <td>2022</td>
            <td><ul>
                <li>Steve Koltes</li>
                <li>Juhi Chawla</li>
                <li>Jay Mehta</li>
            </ul></td>
        </tr>
        <tr>
            <td>Kolkata Knight Riders</td>
            <td>Kolkata, West Bengal</td>
            <td>Eden Gardens</td>
            <td>2008</td>
            <td><ul>
                <li>Shah Rukh Khan</li>
                <li>Juhi Chawla</li>
                <li>Jay Mehta</li>
            </ul></td>
        </tr>
        <tr>
            <td>Lucknow Super Gaints</td>
            <td>Lucknow, Uttar Pradesh</td>
            <td>BRSABV Ekana Cricket Stadium</td>
            <td>2022</td>
            <td><ul>
                <li>Sanjiv Goenka</li>
            </ul></td>
        </tr>
    </table>
    )
}