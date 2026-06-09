const fs = require("fs");
// const { createClient } = require("@supabase/supabase-js");


const koulchiData = fs.readFileSync("koulchi_jdida.json", "utf-8");

const parsedData = JSON.parse(koulchiData);

// let firstItem = parsedData[0];

const insertRow = async (item) => {
    const supabaseUrl = "https://rrvgqxwltgukgyifsckw.supabase.co/rest/v1/etablissements";
    const supabaseKey = "sb_publishable_w8rE8lH7E0oGPf_fiwRG2w_JOZuqnP-";

    try {
        let response = await fetch(supabaseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": supabaseKey,
                // "Authorization": `Bearer ${supabaseKey}`
            },
            body: JSON.stringify(item)
        });
        console.log("Data inserted successfully:");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}
// console.log(JSON.stringify(firstItem));

const runLoop = async () => {
    for (let i = 0; i < parsedData.length; i++) {
        const item = parsedData[i];
        console.log(`Inserting ${item.code}...⏰`);

        let res = await insertRow(item);

        console.log(`${item.code} inserted ✅ - ${i + 1} / ${parsedData.length}`);

    }
}

runLoop();