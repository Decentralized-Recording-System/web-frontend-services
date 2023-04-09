export const ethEndpoint = "http://127.0.0.1:8545";
export const contractAddress = "0x36D44A3F3eA2D96EFBf3312a12FF2b8b8efd99d9";
export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "AddCompanyAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "AddUserAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "braking",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousBrake",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousTurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousSpeed",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "averageSpeed",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "drivingTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
        ],
        internalType: "struct DRS_DATA_STORE.DrivingData[]",
        name: "_dataArray",
        type: "tuple[]",
      },
    ],
    name: "AddUserDrivingData",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "AdminGetUserDrivingData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "braking",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousBrake",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousTurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousSpeed",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "averageSpeed",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "drivingTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
        ],
        internalType: "struct DRS_DATA_STORE.DrivingData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GetAllAddress",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GetSizeOfAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GetUserDrivingData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "braking",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousBrake",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousTurn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dangerousSpeed",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "averageSpeed",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "drivingTime",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
        ],
        internalType: "struct DRS_DATA_STORE.DrivingData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "updateCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "lastUpdate",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "lastScore",
            type: "uint256",
          },
        ],
        internalType: "struct DRS_DATA_STORE.ResponseData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
