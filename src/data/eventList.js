export default [
  {
    name: "Rock concert",
    venue: "The Apollo",
    startDate: "October 13, 2020 21:00:00",
    availablePlacesLeft: 0,
    price: [
      {
        currency: "£",
        ticketPrices: {
          min: 12,
          max: 26
        },
        feePercentage: 5,
        fixedFee: 0.7
      },
      {
        currency: "$",
        ticketPrices: {
          min: 9.4,
          max: 20.37
        },
        feePercentage: 5,
        fixedFee: 0.9
      }
    ]
  },
  {
    name: "Festival",
    venue: "Somerset",
    startDate: "July 20, 2021 11:00:00",
    availablePlacesLeft: 65,
    price: [
      {
        currency: "£",
        ticketPrices: {
          min: 50,
          max: 100
        },
        feePercentage: 7,
        fixedFee: 0.5
      },
      {
        currency: "$",
        ticketPrices: {
          min: 63.75,
          max: 127.5
        },
        feePercentage: 8,
        fixedFee: 0.3
      }
    ]
  },
  {
    name: "Charity Run",
    venue: "London",
    startDate: "June 21, 2021 11:13:00",
    availablePlacesLeft: 500,
    price: [
      {
        currency: "£",
        ticketPrices: {
          min: 15,
          max: 20
        },
        feePercentage: 7,
        fixedFee: 0.5
      },
      {
        currency: "$",
        ticketPrices: {
          min: 20,
          max: 25
        },
        feePercentage: 8,
        fixedFee: 0.6
      }
    ]
  },
  {
    name: "Corporate presentation",
    venue: "Manchester",
    startDate: "September 10, 2020 11:15:00",
    availablePlacesLeft: 12,
    price: [
      {
        currency: "£",
        ticketPrices: {
          min: 25,
          max: 50
        },
        feePercentage: 5,
        fixedFee: 0.7
      },
      {
        currency: "$",
        ticketPrices: {
          min: 30,
          max: 38
        },
        feePercentage: 9,
        fixedFee: 0.9
      }
    ]
  },
  {
    name: "Adventure Park",
    venue: "Peak District",
    startDate: "June 21, 2020 13:30:00",
    availablePlacesLeft: 12,
    price: [
      {
        currency: "£",
        ticketPrices: {
          min: 65,
          max: 85
        },
        feePercentage: 5,
        fixedFee: 2
      },
      {
        currency: "$",
        ticketPrices: {
          min: 80,
          max: 100
        },
        feePercentage: 7,
        fixedFee: 3
      }
    ]
  }
];
