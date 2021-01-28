import React from "react"
import Header from "./components/Header.js"
import Stripe from "./components/Stripe.js"
export default function Home() {
  return (
    <div class="body">

    <div class="splash">
        <Header/>

        <Stripe/>
        <div class="control">
           <h2>
             Title of big picture
           </h2>
           <div class="arrows">
           <div class="arrow"></div>
           <div class="arrow left"></div>
           </div>
        </div>

    </div>
</div>

  )
}
