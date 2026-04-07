// API का दुर्दाशक
const दुर्दाशक = "https://api.thecatapi.com/v1/images/search?limit=17";


let मेरीपसंदकिलिस्ट = [];


function खोलतब(नाम) {

    const सभीचीज़े = document.getElementsByClassName("तबचीज़े");
    for (let i = 0; i < सभीचीज़े.length; i++) {
        सभीचीज़े[i].style.display = "none";
    }


    const सभीदबा = document.getElementsByClassName("तबदबा");
    for (let i = 0; i < सभीदबा.length; i++) {
        सभीदबा[i].className = सभीदबा[i].className.replace(" ननह", "");
    }


    document.getElementById(नाम).style.display = "block";


    event.currentTarget.className += " ननह";


    if (नाम === "बिल्ली") {
        अपडेटसभीबिल्लियाँ();
    }
}


function अपडेटसभीबिल्लियाँ() {
    const बिल्लीडा = document.getElementById("बिल्ली");
    const सभीबिल्लियाँ = बिल्लीडा.getElementsByClassName("सब");

    for (let i = 0; i < सभीबिल्लियाँ.length; i++) {
        const बिल्ली = सभीबिल्लियाँ[i];
        const दिलबटन = बिल्ली.querySelector(".पसंद button");
        const दुर्दाशक = बिल्ली.querySelector("img").src;

        if (दिलबटन) {
            const पहलेसेहै = मेरीपसंदकिलिस्ट.some(आइटम => आइटम[0] === दुर्दाशक);
            const रास्ता = दिलबटन.querySelector('path');
            const भरना = पहलेसेहै ? "red" : "#fff";
            const नयारंग = पहलेसेहै ? "red" : "खाली";

            if (रास्ता) {
                रास्ता.setAttribute('fill', भरना);
                दिलबटन.setAttribute('onclick', `रंगबदलाओ(this, '${नयारंग}', '${दुर्दाशक}')`);
            }
        }
    }
}


function रंगबदलाओ(दबा, रंग, दुर्दाशक) {

    const नयारंग = (रंग === "#fff") ? "red" : "खाली";
    const रास्ता = दबा.querySelector('path');

    if (रास्ता) {
        const संधान = (नयारंग === "खाली") ? "#fff" : "red";
        रास्ता.setAttribute('fill', संधान);
        दबा.setAttribute('onclick', `रंगबदलाओ(this, '${नयारंग}', '${दुर्दाशक}')`);


        if (!मेरीपसंदकिलिस्ट.some(आइटम => आइटम[0] === दुर्दाशक)) {

            मेरीपसंदकिलिस्ट.push([दुर्दाशक, []]);
            console.log(मेरीपसंदकिलिस्ट)
            console.log("पसंद की लिस्ट में जोड़ा गया:", दुर्दाशक);
        } else {

            मेरीपसंदकिलिस्ट = मेरीपसंदकिलिस्ट.filter(सामान => सामान[0] !== दुर्दाशक);
            console.log(मेरीपसंदकिलिस्ट)
            console.log("पसंद की लिस्ट से हटाया गया:", दुर्दाशक);
        }

        // localStorage में डेटा सेव करें
        //localStorage.setItem("मेरीपसंदकिलिस्ट", JSON.stringify(मेरीपसंदकिलिस्ट));


        दिखाएपसंद();


        अपडेटसभीबिल्लियाँ();
    }
}


function बनाहार्टबटन(दुर्दाशक) {

    const पहलेसेहै = मेरीपसंदकिलिस्ट.some(आइटम => आइटम[0] === दुर्दाशक);
    const भरना = पहलेसेहै ? "red" : "#fff";

    return `
    <div class="पसंद">
        <button onclick="रंगबदलाओ(this, '${भरना}', '${दुर्दाशक}')">
        
      <svg aria-hidden="true" display="block" class="Logo__icon--eLIzO vkuiIcon vkuiIcon--36 vkuiIcon--w-36 vkuiIcon--h-36 vkuiIcon--new_logo_vk_color_36" width="36" height="36" viewBox="0 0 36 36" style="width: 36px; height: 36px;"><rect width="28" height="28" x="4" y="4" fill="#07f" rx="6.72"></rect><path fill="${भरना}" d="M18.956 24.417c-6.318 0-10.15-4.384-10.301-11.667h3.2c.1 5.35 2.534 7.617 4.4 8.084V12.75h3.066v4.617c1.8-.2 3.684-2.3 4.317-4.617h3.018c-.483 2.85-2.534 4.95-3.983 5.817 1.45.7 3.784 2.533 4.683 5.85H24.04c-.7-2.217-2.416-3.934-4.717-4.167v4.167z"></path></svg>
        </button>
    </div>`;
}


function दिखाएपसंद() {
    const पसंदडा = document.getElementById("पसंद");
    let html = "";

    // लिस्ट में लूप चलाओ और HTML बनाओ
    for (let i = 0; i < मेरीपसंदकिलिस्ट.length; i++) {
        const दुर्दाशक = मेरीपसंदकिलिस्ट[i][0];
        const लेखा = मेरीपसंदकिलिस्ट[i][1];
        let लेखाहतमल = "";
        if (लेखा && लेखा.length > 0) {
            for (let j = 0; j < लेखा.length; j++) {
                लेखाहतमल += `<p>${लेखा[j]}</p>`;
            }
        }

        html += `
        <div class="रक">
        <div class="सब">
            <img src="${दुर्दाशक}" style="width:200px; margin:10px;">
${बनाहार्टबटन(दुर्दाशक)}
           </div>
           <div>${लेखाहतमल}</div>
           <input type="text" id="लेख${i}" placeholder="यहाँ लिखें">
           <button class="तबदबा" onclick="लिख('${i}')">मेरी पसंद</button>
           </div>
              `;
    }


    पसंदडा.innerHTML = html;
}

function लिख(गण) {
    const लेखावट = document.getElementById(`लेख${गण}`);
    const लेख = लेखावट.value;


    const सही = मेरीपसंदकिलिस्ट[गण];
    if (सही) { // यह चेक करें कि खाली तो नहीं है
        सही[1].push(लेख);
        console.log("आइटम अपडेट हुआ:", सही);



        // localStorage में डेटा सेव करें
        // localStorage.setItem("मेरीपसंदकिलिस्ट", JSON.stringify(मेरीपसंदकिलिस्ट));


        दिखाएपसंद();



    }
}


async function बिल्ली() {
    try {

        const जवाब = await fetch(दुर्दाशक);


        if (!जवाब.ok) {
            throw new Error(`HTTP गलत : ${जवाब.status}`);
        }


        const संग्रा = await जवाब.json();

        const दुर्दाश = संग्रा.map(बिल्ली => बिल्ली.url);


        return दुर्दाश;

    } catch (गलती) {
        console.error("गलती:", गलती);
        return [];
    }
}

async function दिखाए() {
    const मेरीसंग्र = await बिल्ली();
    const बिल्लीडा = document.getElementById("बिल्ली");
    let सराहतमल = "";

    for (let i = 0; i < मेरीसंग्र.length; i++) {
        const दुर्दाशक = मेरीसंग्र[i];

        सराहतमल += `
        <div class="सब">
            <img src="${दुर्दाशक}" style="width:200px; margin:10px;">
              ${बनाहार्टबटन(दुर्दाशक)}
        </div>`;
    }
    बिल्लीडा.innerHTML = सराहतमल;
}


let पेजसंख्या = 3;
let लोडहोरहा = false;

async function नईबिल्लीलोडकरो() {
    if (लोडहोरहा) return;

    लोडहोरहा = true;
    पेजसंख्या++;

    const नयादुर्दाशक = `https://api.thecatapi.com/v1/images/search?limit=40&page=${पेजसंख्या}`;

    try {
        const जवाब = await fetch(नयादुर्दाशक);
        const संग्रा = await जवाब.json();
        const दुर्दाश = संग्रा.map(बिल्ली => बिल्ली.url);

        const बिल्लीडा = document.getElementById("बिल्ली");

        for (let i = 0; i < दुर्दाश.length; i++) {
            const दुर्दाशक = दुर्दाश[i];

            const नयाबिल्ली = document.createElement("div");
            नयाबिल्ली.className = "सब";
            नयाबिल्ली.innerHTML = `
                <img src="${दुर्दाशक}" style="width:200px; margin:10px;">
                ${बनाहार्टबटन(दुर्दाशक)}
            `;

            बिल्लीडा.appendChild(नयाबिल्ली);
        }


        अपडेटसभीबिल्लियाँ();
    } catch (गलती) {
        console.error("नई बिल्लियाँ लोड करने में गलती:", गलती);
    } finally {
        लोडहोरहा = false;
    }
}

window.addEventListener("scroll", function () {

    const बिल्लीडा = document.getElementById("बिल्ली");
    if (बिल्लीडा.style.display === "none") return;


    const स्क्रॉलऊंचाई = window.innerHeight + window.scrollY;
    const दस्तावेजऊंचाई = document.body.offsetHeight;


    if (स्क्रॉलऊंचाई >= दस्तावेजऊंचाई - 100) {
        नईबिल्लीलोडकरो();
    }
});


दिखाए();


setTimeout(() => नईबिल्लीलोडकरो(), 500);
setTimeout(() => नईबिल्लीलोडकरो(), 1000);
setTimeout(() => नईबिल्लीलोडकरो(), 1500);
