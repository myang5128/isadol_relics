import React from 'react';
import "./body.css";
import Info from "./info";

function body() {
    return (
        <div className="body__main">
            <h1>Isadol's Relics of the Deep</h1>
            <div className="body__story">
                <Info
                    check="story"
                    title="Plot of Isadol's Relics of the Deep"
                    text="In the war-torn continent of the former Kadanian Kingdom, three distinct nations 
                    wage covert wars against each other, trying to destabilize the foundations before sweeping in for the final blow. 
                    The religious and tyrannical theocratic rule of the Thegilopos League; the division and ambitious warlords of the Confederation 
                    of Brynia; and the former Kadanian aristocratic controll of the Principality of Pemnatos. 
                    From the beautiful Asklenos Bay, to the ravaged and arid Warring Wastelands, to the high, cold peaks of the Kadanian Mountains, to 
                    the edges of the vast Great Georgian Sea, countless warlords and princes pop up, vying for 
                    control of the Kadanian continent, though crumbling down due to the habitual betrayal of others. 
                    In the modest city of Pratigos, on the southern borders of Pemnatos, there exists the Resting Lions guild, led by 
                    the war veteran Julius Augustine, who plans on finding five ancient relics that had been lost to time. 
                    Augustine foresaw the doom of Kadania and the invasion of monsters. Only the five relics of Isadol 
                    may have the power needed to hold back the inevitable invasion. Travel through the 
                    war-torn nations, conversing with nobles and peasants alike, and fight both men and monsters as 
                    you try and find the relics and achieve your dreams, or die fighting with your brothers in arms."
                />
            </div>

            <div className="body__relics">
                <Info
                    check="relics"
                    name="Uurgkhandor"
                    description="The Mask of a Thousand Screams."
                />
                <Info
                    check="relics"
                    name="Oblivion"
                    description="The Cursed Blade"
                />
                <Info
                    check="relics"
                    name="Onysseus"
                    description="The Dual Rings of Life and Death"
                />
                <Info
                    check="relics"
                    name="Acaphadis"
                    description="The Phantasmal Watcher"
                />
                <Info
                    check="relics"
                    name="Nami-Atez"
                    description="The Silent and Watchful Cloak"
                />

            </div>

            <div className="body__gods">

            </div>

            <div className="body__map">

            </div>

            <div className="body__characters">

            </div>

            <div className="body__quests">

            </div>

        </div>
    )
}

export default body