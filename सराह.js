
let मेरीपसंदकिलिस्ट = [];


function खोलतब(नाम) {
    const सभीचीज़े = document.getElementsByClassName("तबचीज़े");
    for (let i = 0; i < सभीचीज़े.length; i++) {
        सभीचीज़े[i].style.display = "none";
    }
    document.getElementById(नाम).style.display = "block";
}



function रंगबदलाओ(दबा, रंग, दुर्दाशक) {
    const नयारंग = (रंग === "none") ? "red" : "खाली";
    const रास्ता = दबा.querySelector('path');
    if (रास्ता) {
        const संधान = (नयारंग === "खाली") ? "none" : "red";
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

        दिखाएपसंद();
    }
}

function बनाहार्टबटन(दुर्दाशक) {

    const पहलेसेहै = मेरीपसंदकिलिस्ट.some(आइटम => आइटम[0] === दुर्दाशक);
    const भरना = पहलेसेहै ? "red" : "none";
    return `
    <div class="पसंद">
        <button onclick="रंगबदलाओ(this, '${भरना}', '${दुर्दाशक}')">
            <svg viewBox="0 0 24 24" fill="${भरना}" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3C4.23858 3 2 5.21619 2 7.95C2 10.157 2.87466 15.3947 11.4875 20.6903C11.7994 20.8821 12.2006 20.8821 12.5125 20.6903C21.1253 15.3947 22 10.157 22 7.95C22 5.21619 19.7614 3 17 3C14.2386 3 12 6 12 6C12 6 9.76142 3 7 3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>                  
    </div>`;
}

function दिखाएपसंद() {
    const पसंदडा = document.getElementById("पसंद");
    let html = "";

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
        <div class="सब">
            <img src="${दुर्दाशक}" style="width:200px; margin:10px;">
            <div>${लेखाहतमल}</div>
            <input type="text" id="लेख${i}" placeholder="यहाँ लिखें">
             <button class="तबदबा" onclick="लिख('${i}')">मेरी पसंद</button>
              ${बनाहार्टबटन(दुर्दाशक)}
        </div>`;
    }

    पसंदडा.innerHTML = html;
}

function लिख(गण) {
    const लेखावट = document.getElementById(`लेख${गण}`);
    const लेख = लेखावट.value;


    const सही = मेरीपसंदकिलिस्ट[गण];
    if (सही) {
        सही[1].push(लेख);
        console.log("आइटम अपडेट हुआ:", सही);
        दिखाएपसंद();

    }
}

const दुर्दाशक = "https://api.thecatapi.com/v1/images/search?limit=10";


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

दिखाए();
