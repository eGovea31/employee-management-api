const fs = require("fs");

const FILE = "data/memberships.json";

function loadMemberships() {
    try {
        const data = fs.readFileSync(FILE, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function saveMemberships(memberships) {
    fs.writeFileSync(FILE, JSON.stringify(memberships, null, 2));
}

module.exports = {
    loadMemberships,
    saveMemberships
};