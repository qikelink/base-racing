export const questionsByModule = {
  module1: {
    level1: [
      {
        question: "What is the primary purpose of blockchain technology?",
        options: [
          "To create digital currencies",
          "To provide a decentralized ledger for transactions",
          "To improve internet speed",
          "To facilitate online gaming",
        ],
        type: "multiple",
      },

      {
        question: "Aptos is built to enhance scalability and security while maintaining decentralization.",
        type: "text",
      },
      {
        question: "Which of the following features does Aptos provide?",
        options: [
          "High transaction throughput",
          "Zero transaction fees",
          "Support for multiple programming languages",
          "Inherent centralization",
        ],
        type: "multiple",
      },
      {
        question: "What consensus mechanism does Aptos utilize?",
        options: [
          "Proof of Work",
          "Proof of Stake",
          "AptosBFT (Byzantine Fault Tolerance)",
          "Delegated Proof of Stake",
        ],
        type: "multiple",
      },
      {
        question: "What programming language is primarily used for developing smart contracts on Aptos?",
        options: ["Solidity", "Move", "Rust", "JavaScript"],
        type: "multiple",
      },
      {
        question: "Aptos allows developers to create which types of applications?",
        options: [
          "Decentralized applications (dApps)",
          "Traditional web applications",
          "Mobile applications without blockchain",
          "Games only",
        ],
        type: "multiple",
      },
      {
        question: "What does the Aptos architecture look like?",
        type: "image",
        imageUrl: "/icons/aptos-architecture-level1.png",
      },
    ],
    level2: [
      {
        question: "What is a smart contract?",
        options: [
          "A digital agreement between parties",
          "A self-executing contract with terms written in code",
          "A traditional legal document",
          "An informal agreement",
        ],
        type: "multiple",
      },

      {
        question: "Smart contracts on Aptos can automate transactions and enforce terms without intermediaries.",
        type: "text",
      },
      {
        question: "Which of the following is a unique feature of the Move language?",
        options: [
          "It is only for Ethereum smart contracts.",
          "It enables resource safety and flexibility.",
          "It requires extensive gas fees.",
          "It can be used for front-end development.",
        ],
        type: "multiple",
      },
      {
        question: "What is the role of the Aptos token (APT)?",
        options: ["Governance and transaction fees", "Rewarding miners", "To store data", "None of the above"],
        type: "multiple",
      },
      {
        question: "How do you deploy a smart contract on Aptos?",
        options: [
          "Using a command line interface and Move CLI",
          "Through a mobile app",
          "By writing it in Solidity",
          "Using Ethereum tools",
        ],
        type: "multiple",
      },
      {
        question: "How can developers interact with the Aptos blockchain?",
        options: [
          "Using the Aptos SDK",
          "By manually writing bytecode",
          "Only through the Aptos Explorer",
          "Using Python scripts only",
        ],
        type: "multiple",
      },
      {
        question: "Here’s a diagram showing the smart contract lifecycle in Aptos:",
        type: "image",
        imageUrl: "/icons/smart-contract-lifecycle.png",
      },
    ],
    level3: [
      {
        question: "What are dApps?",
        options: [
          "Decentralized applications that run on a blockchain",
          "Applications that require a server",
          "Only games available on blockchain",
          "Apps that can only be used offline",
        ],
        type: "multiple",
      },

      {
        question: "Aptos's architecture is designed for high throughput and low latency, making it suitable for dApps.",
        type: "text",
      },
      {
        question: "Which programming concepts are essential for working with Move?",
        options: [
          "Basic programming and resource management",
          "Only object-oriented programming",
          "No programming knowledge required",
          "Knowledge of only Python",
        ],
        type: "multiple",
      },
      {
        question: "Which of the following is NOT a benefit of using Aptos for dApp development?",
        options: [
          "Fast transaction speeds",
          "Extensive community support",
          "Complexity of programming",
          "Security features",
        ],
        type: "multiple",
      },
      {
        question: "How can you test your smart contracts before deploying them?",
        options: [
          "Using a local testnet",
          "Deploying them directly on the mainnet",
          "Not possible to test",
          "Only through third-party services",
        ],
        type: "multiple",
      },
      {
        question: "What is the purpose of the Aptos governance model?",
        options: [
          "To decentralize decision-making processes",
          "To centralize control over the network",
          "To monitor user activity",
          "None of the above",
        ],
        type: "multiple",
      },
      {
        question: "This diagram illustrates the key components of a dApp architecture:",
        type: "image",
        imageUrl: "/icons/dapp-architecture.png",
      },
    ],
    level4: [
      {
        question: "What is the primary benefit of participating in the Aptos community?",
        options: [
          "Networking with other developers",
          "Access to exclusive information",
          "Learning from shared experiences",
          "All of the above",
        ],
        type: "multiple",
      },

      {
        question: "Engaging with the Aptos community can lead to collaboration on open-source projects.",
        type: "text",
      },
      {
        question: "What platforms are used for community discussions in Aptos?",
        options: ["Discord and Telegram", "Facebook and Instagram", "Only GitHub", "Email only"],
        type: "multiple",
      },
      {
        question: "How can you contribute to Aptos’s development?",
        options: [
          "By providing feedback and contributing code",
          "By only using the platform",
          "Not possible to contribute",
          "By observing others",
        ],
        type: "multiple",
      },
      {
        question: "What role does open-source play in the Aptos ecosystem?",
        options: [
          "Promotes transparency and collaboration",
          "Limits innovation",
          "Is not relevant to blockchain",
          "Only for academic purposes",
        ],
        type: "multiple",
      },
      {
        question: "Which of the following resources is essential for staying updated on Aptos?",
        options: ["Official Aptos documentation and blog", "Only social media", "Personal blogs", "Gaming forums"],
        type: "multiple",
      },
      {
        question: "Check out this infographic about the Aptos community initiatives:",
        type: "image",
        imageUrl: "/icons/community-initiatives.png",
      },
    ],
  },

  module2: {
    level1: [
      {
        question: "What are the key components of the Aptos architecture?",
        options: [
          "Modules, Resources, and Transactions",
          "Nodes, Miners, and Validators",
          "Servers, Clients, and Databases",
          "Clients, APIs, and Libraries",
        ],
        type: "multiple",
      },

      {
        question:
          "Aptos utilizes a modular architecture that separates execution from storage. This design enhances scalability and flexibility, enabling the network to efficiently manage increasing transaction volumes and adapt to future requirements. Can you explain how this architecture benefits developers and users?",
        type: "text",
      },

      {
        question: "What is the primary purpose of Aptos's modular design?",
        options: [
          "To limit scalability",
          "To enhance transaction speed and flexibility",
          "To centralize control",
          "To simplify user experience",
        ],
        type: "multiple",
      },
      {
        question: "Which component is responsible for managing state and transactions in Aptos?",
        options: ["Execution layer", "Storage layer", "Network layer", "User interface"],
        type: "multiple",
      },
      {
        question: "How does Aptos ensure high throughput in transactions?",
        options: [
          "By batching transactions",
          "Using Proof of Work",
          "Limiting user access",
          "Deploying multiple blockchains",
        ],
        type: "multiple",
      },
      {
        question:
          "The diagram below illustrates the key components of the Aptos architecture. It highlights how these components interact to deliver a scalable and efficient blockchain solution. What insights can you gain from this architecture regarding its modular design and functionality?",
        type: "image",
        imageUrl: "/icons/aptos-architecture-level2.png",
      },
      {
        question: "What advantages does Aptos's architecture provide for developers?",
        options: [
          "Improved security and flexibility",
          "Higher fees for transactions",
          "Limited access to resources",
          "No need for coding knowledge",
        ],
        type: "multiple",
      },
    ],
    level2: [
      {
        question: "What is the syntax of the Move programming language primarily designed for?",
        options: ["Smart contracts", "Game development", "Web development", "Data analysis"],
        type: "multiple",
      },

      {
        question:
          "Move's resource-oriented programming model is designed to prevent accidental data duplication, which significantly enhances the safety and integrity of smart contracts. How does this model contribute to more secure and efficient programming practices in blockchain development?",
        type: "text",
      },
      {
        question: "Which of the following features does Move provide?",
        options: [
          "Resource management and access control",
          "Only basic scripting capabilities",
          "No error handling",
          "Limited support for data structures",
        ],
        type: "multiple",
      },
      {
        question: "What is the primary data structure in Move?",
        options: ["Vectors", "Resources", "Objects", "Arrays"],
        type: "multiple",
      },
      {
        question: "How can you test your Move smart contracts?",
        options: [
          "Using the Move Unit Testing framework",
          "Only on the mainnet",
          "By deploying them without tests",
          "Not possible to test",
        ],
        type: "multiple",
      },
      {
        question:
          "The image below showcases the syntax and structure of Move programs. It highlights key elements and conventions used in Move, helping developers understand how to write effective smart contracts. What key takeaways do you see from this illustration that could enhance your understanding of Move programming?",
        type: "image",
        imageUrl: "/icons/move-syntax.png",
      },
      {
        question: "What aspect of Move promotes security in contract development?",
        options: [
          "Static typing and resource safety",
          "Dynamic typing",
          "No need for testing",
          "Simplicity of language",
        ],
        type: "multiple",
      },
    ],
    level3: [
      {
        question: "What is a wallet in the context of blockchain?",
        options: [
          "A software application for managing digital assets",
          "A physical storage device for cryptocurrencies",
          "A service for buying and selling stocks",
          "None of the above",
        ],
        type: "multiple",
      },

      {
        question:
          "Aptos wallets play a crucial role in managing private keys and enabling users to interact securely with the blockchain. They ensure that users can safely store their assets and perform transactions without compromising their security. How do these wallets enhance user experience and trust within the Aptos ecosystem?",
        type: "text",
      },
      {
        question: "What is a seed phrase?",
        options: [
          "A backup for wallet recovery",
          "A type of password",
          "A transaction verification method",
          "An encryption key",
        ],
        type: "multiple",
      },
      {
        question: "How can users secure their Aptos wallets?",
        options: [
          "By using complex passwords and enabling 2FA",
          "Storing passwords in plain text",
          "Sharing seed phrases publicly",
          "None of the above",
        ],
        type: "multiple",
      },
      {
        question: "What does a transaction on Aptos require?",
        options: [
          "A valid signature and sufficient balance",
          "Just an email address",
          "No signature needed",
          "Only the wallet address",
        ],
        type: "multiple",
      },
      {
        question:
          "This diagram illustrates the wallet architecture and transaction flow in Aptos:",
        type: "image",
        imageUrl: "/icons/wallet-architecture.png",
      },
      {
        question: "What happens if a user loses their seed phrase?",
        options: [
          "They cannot recover their wallet",
          "They can reset it through email",
          "They can recover it with support",
          "Nothing happens",
        ],
        type: "multiple",
      },
    ],
    level4: [
      {
        question: "What is Aptos governance?",
        options: [
          "The process by which community members influence the development of the platform",
          "Only for the developers",
          "A way to centralize power",
          "A marketing strategy",
        ],
        type: "multiple",
      },

      {
        question: "Aptos governance allows token holders to vote on proposals that affect the ecosystem.",
        type: "text",
      },
      {
        question: "What role do community proposals play in Aptos governance?",
        options: [
          "They provide a way for users to suggest improvements",
          "They are ignored by the community",
          "Only developers can propose changes",
          "They do not exist",
        ],
        type: "multiple",
      },
      {
        question: "What is a governance token?",
        options: [
          "A token that allows holders to participate in decision-making",
          "A token used only for transactions",
          "A token with no value",
          "A marketing tool",
        ],
        type: "multiple",
      },
      {
        question: "How does Aptos ensure transparency in governance?",
        options: [
          "By recording all votes and proposals on the blockchain",
          "By keeping everything private",
          "Only allowing developer access",
          "Not tracking votes",
        ],
        type: "multiple",
      },
      {
        question: "This infographic highlights the governance structure of the Aptos ecosystem:",
        type: "image",
        imageUrl: "/icons/governance-structure.png",
      },
      {
        question: "What are the benefits of active community participation in Aptos governance?",
        options: [
          "Ensuring diverse perspectives and improved decision-making",
          "Only benefiting developers",
          "Increased fees for transactions",
          "None of the above",
        ],
        type: "multiple",
      },
    ],
  },
};
