const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "cryptoSeats"
  const SYMBOL = "TM"

  // Deploy contract
  const CryptoSeats = await ethers.getContractFactory("CryptoSeats")
  const cryptoSeats = await CryptoSeats.deploy(NAME, SYMBOL)
  await cryptoSeats.deployed()

  console.log(`Deployed CryptoSeats Contract at: ${cryptoSeats.address}\n`)

  // List 10 events
  const occasions = [
    {
        name: "Bollywood Night Live",
        cost: tokens(0.1),
        tickets: 0,
        date: "September 15",
        time: "7:00PM IST",
        location: "StarCity Auditorium - Mumbai, MH"
    },
    {
        name: "Desi Beats Carnival",
        cost: tokens(0.3),
        tickets: 125,
        date: "October 8",
        time: "5:30PM IST",
        location: "Heritage Grounds - New Delhi, DL"
    },
    {
        name: "TechRevolution India",
        cost: tokens(0.25),
        tickets: 200,
        date: "November 20-21",
        time: "9:00AM IST",
        location: "Innovation Hub - Bangalore, KA"
    },
    {
        name: "Handcrafted Treasures Fair",
        cost: tokens(0.15),
        tickets: 125,
        date: "December 5-6",
        time: "10:00AM IST",
        location: "Cultural Center - Jaipur, RJ"
    },
    {
        name: "EcoCon India",
        cost: tokens(0.02),
        tickets: 0,
        date: "January 18",
        time: "11:00AM IST",
        location: "Sustainability Hall - Hyderabad, TS"
    },
    {
        name: "VogueVibes India",
        cost: tokens(0.015),
        tickets: 0,
        date: "February 28",
        time: "8:00PM IST",
        location: "Grand Pavilion - Kolkata, WB"
    },
    {
        name: "Flavors of India Expo",
        cost: tokens(0.5),
        tickets: 155,
        date: "March 15-16",
        time: "12:30PM IST",
        location: "Culinary Center - Chennai, TN"
    },
    {
        name: "IgniteStart India",
        cost: tokens(0.03),
        tickets: 140,
        date: "April 10",
        time: "9:30AM IST",
        location: "Innovation Tower - Pune, MH"
    },
    {
        name: "ZenQuest Retreat",
        cost: tokens(0.4),
        tickets: 200,
        date: "May 22-24",
        time: "7:00AM IST",
        location: "Serenity Estate - Rishikesh, UK"
    },
    {
        name: "SangeetSangam India",
        cost: tokens(0.45),
        tickets: 0,
        date: "June 5",
        time: "6:30PM IST",
        location: "Harmony Hall - Varanasi, UP"
    }
]



  for (var i = 0; i < 10; i++) {
    const transaction = await cryptoSeats.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});