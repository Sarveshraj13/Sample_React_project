import React from "react";
import "./Demo.css"

export default function Demo(){
    return(
    <div>
            <h1>Sarah's Favorite Animal</h1>
            <img src="https://www.kktv.com/resizer/NZakU7g_2xthBieHeX5uA7dAs8U=/arc-photo-gray/arc3-prod/public/Z2C67SO4P5GHZALGD6Q4ULJHEI.png" alt="" height="300" width="600"></img>
            <p>My name is Sarah, and my favorite animal is the moose.<br></br>
            They can be up to 6.5 feet tall and weigh 1200 pounds.<br></br>
            Surprisingly, they're really good at swimming!<br></br>
            If you want to learn more about the moose, check out <a href="https://en.wikipedia.org/wiki/Moose">More Detail about Moose</a>
            </p>

            <h2>Moose are awesome because....</h2>
            <ol type="1">
             <li>They can swim really well</li>
            <li>They can make really funny noises</li>
            <li>They can close their nostrils</li>
        </ol>

            <h2>If I were a moose, I would......</h2>
        <ul>
            <li>Eat lots of lettuce</li>
            <li>Carry little animals on my antlers</li>
            <li>Swim to Alaska</li>
        </ul>
            <h2>Moose Video</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OLZ4BJPJM70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    );
}
//export default demo;