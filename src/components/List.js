import React from "react";
import "./List.css"

export default function List(){
    return(
        <div>
             <h1>Creating the ordered List inside the ordered List</h1>
             <ol>
                 <li>History</li>
                    <ol type="i">
                        <li>Background</li>
                        <li>Foundation</li>
                        <li>Expansions and termination</li></ol>
                        <li>Administration</li>
                        <li>Organisation</li>
                    <ol type="i">
                        <li>Tournament Format</li>
                        <li>Player acquisition, squad comppostion and salaries</li>
                        <li>Match rules</li>
                        <li>Prize money</li></ol>
                        <li>Teams</li>
                    <ol type="i">
                        <li>Current teams</li>
                        <li>Defunct teams</li>
                        <li>Timelines</li></ol>
                        <li>Tournament seasons and results</li>
                    <ol type="i">
                        <li>Performance in the IPL by title</li>
                        <li>IPL season results</li></ol>
                        <li>Teams performance</li>
                    <ol type="i">
                        <li>League stage positions</li></ol>
                        <li>Awards</li>
                    <ol type="i">
                        <li>Orange Cap</li>
                        <li>Purple Cap</li>
                        <li>Most Valuble Player</li>
                        <li>Faimlay Award</li>
                        <li>Emerging player award</li>
                        <li>Most scores Award</li></ol>        
                        <li>Financials</li>
                    <ol type="i">
                        <li>Titlt Sponsership</li>
                        <li>Payments to foreign national boards</li>
                        <li>Brand value</li></ol>
                        <li>Broadcasting</li>
                    <ol type="i">
                        <li>Sony and WSG (2008-2017)</li>
                        <li>Star India (2018-2022)</li>
                        <li>2023-2027</li>
                        <li>International broadcasters</li></ol>    
                        <li>Controversy</li>
                    <ol type="i">
                        <li>2012 and 2013 IPL spot facing and betting match</li></ol>
                        <li>See also</li>
                        <li>References</li>  
                        <li>External links</li>  
            </ol>
        </div>
    );

}