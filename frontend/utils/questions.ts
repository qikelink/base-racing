export const questionsByModule = {
  module1: {
    level1: [
      // Educational Text Content
      {
        title: "Aptos High-Throughput Architecture",
        content:
          "Aptos achieves high transaction throughput while maintaining safety through its innovative Block-STM system. This system enables parallel execution of transactions by detecting and resolving conflicts automatically. Block-STM optimistically executes transactions in parallel, tracks memory usage, and validates correctness before commitment. This approach ensures both high throughput and safety, making Aptos a powerful platform for scalable decentralized applications.",
        type: "text",
        explanation: "Core architectural understanding is crucial for developers working with Aptos.",
      },
      {
        title: "Move Virtual Machine in Aptos",
        content:
          "The Move Virtual Machine plays a crucial role in Aptos by executing smart contracts with strong safety guarantees. It interprets and runs Move bytecode, ensuring that resources are handled securely and that key invariants are maintained throughout contract execution. The MoveVM's design prioritizes safety, expressiveness, and performance, making it an ideal foundation for building complex decentralized applications.",
        type: "text",
        explanation: "Understanding the MoveVM is fundamental for Aptos developers.",
      },
      {
        title: "AptosBFT Consensus Mechanism",
        content:
          "AptosBFT, the consensus mechanism used by Aptos, achieves high throughput through optimized leader selection and parallel voting. This mechanism allows for quick agreement on the state of the blockchain across all validators, enabling fast finality of transactions. AptosBFT balances speed and security, ensuring that the network can process a high volume of transactions without compromising on safety or decentralization.",
        type: "text",
        explanation: "Consensus mechanisms are a core component of blockchain technology.",
      },

      // Image Content
      {
        title: "Aptos Execution Architecture Diagram",
        description:
          "This diagram illustrates how Block-STM, parallel execution, and the Move VM interact to enable high-throughput processing while maintaining safety guarantees. Pay close attention to the data flow and validation checkpoints depicted in the image.",
        type: "image",
        imageUrl: "/icons/aptos-architecture-level1.png",
        explanation: "Visual understanding of architecture aids development.",
      },

      // Multiple Choice Questions
      {
        question: "Which architectural innovation differentiates Aptos from traditional Layer 1 blockchains?",
        options: [
          "The use of Proof of Work consensus",
          "Parallel transaction execution with Block-STM",
          "Sequential transaction processing",
          "Single-threaded smart contracts",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Understanding Aptos's core innovation is fundamental for developers.",
      },
      {
        question: "What role does the Move Virtual Machine play in Aptos?",
        options: [
          "Only for token transfers",
          "Executing smart contracts with safety guarantees",
          "Managing network consensus",
          "Handling user interfaces",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "The MoveVM is central to Aptos's smart contract functionality.",
      },
      {
        question: "How does AptosBFT consensus mechanism achieve high throughput?",
        options: [
          "By sacrificing safety for speed",
          "Through optimized leader selection and parallel voting",
          "Using Proof of Work",
          "By centralizing validation",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Understanding consensus is essential for blockchain developers.",
      },
    ],

    level2: [
      // Educational Text Content
      {
        title: "Move's Resource Types and Linear Logic",
        content:
          "Move's type system features resource types with linear logic, a powerful feature that prevents reentrancy attacks by default. Resources in Move can only be moved, not copied or implicitly discarded, ensuring that digital assets are handled with the same care as physical assets. This system provides strong safety guarantees, making it difficult to accidentally or maliciously mishandle tokens or other valuable resources.",
        type: "text",
        explanation: "Move's type system is a key security feature for smart contract development.",
      },
      {
        title: "Ability-Based Access Control in Move",
        content:
          "Move implements an ability-based access control system that enhances security through capability-based permission management. This system allows developers to define precise, fine-grained permissions for resources and functions. By explicitly declaring the abilities of custom types, developers can create more secure and intentional code, reducing the risk of unauthorized access or operations.",
        type: "text",
        explanation: "Understanding access control is crucial for building secure smart contracts.",
      },
      {
        title: "Formal Verification in Move",
        content:
          "Move supports formal verification, allowing developers to mathematically prove properties of their smart contracts. This capability goes beyond traditional testing by providing rigorous, mathematical assurances about contract behavior. Formal verification can guarantee the absence of certain classes of bugs and ensure that contracts behave correctly under all possible inputs and states, significantly enhancing the security and reliability of decentralized applications.",
        type: "text",
        explanation: "Formal verification provides strong guarantees for critical smart contracts.",
      },

      // Image Content
      {
        title: "Move Resource Lifecycle Diagram",
        description:
          "This diagram visualizes how Move resources are created, transferred, and destroyed safely. It illustrates the key stages in a resource's lifecycle and the safety checks that occur at each stage. Understanding this lifecycle is crucial for implementing secure smart contracts in Move.",
        type: "image",
        imageUrl: "/icons/move-resource-lifecycle.png",
        explanation: "Resource lifecycle understanding is fundamental for Move developers.",
      },

      // Multiple Choice Questions
      {
        question: "Which Move language feature prevents reentrancy attacks by default?",
        options: [
          "Resource types with linear logic",
          "Optional bounds checking",
          "Dynamic dispatch",
          "Implicit conversions",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Resource types with linear logic are a key security feature in Move.",
      },
      {
        question: "How does Move's ability-based access control system enhance security?",
        options: [
          "By allowing unrestricted access",
          "Through capability-based permission management",
          "By removing access controls",
          "Using centralized permissions",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Capability-based permission management provides fine-grained security control.",
      },
      {
        question: "What is the primary benefit of Move's formal verification capabilities?",
        options: [
          "Automated bug creation",
          "Mathematical proof of contract properties",
          "Removal of testing requirements",
          "Simplified deployment",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Formal verification provides mathematical proofs of contract correctness.",
      },
    ],

    level3: [
      // Educational Text Content
      {
        title: "Upgradeability in Aptos Smart Contracts",
        content:
          "Upgradeability is a crucial feature for long-term smart contract maintenance. In Aptos, the proxy pattern is commonly used to achieve upgradeability. This pattern involves separating the contract's storage and logic, allowing developers to update the logic while preserving the contract's state and address. Implementing upgradeability requires careful design to ensure security and maintain trust with users.",
        type: "text",
        explanation: "Upgradeability is essential for maintaining and improving smart contracts over time.",
      },
      {
        title: "The Escrow Pattern in Decentralized Exchanges",
        content:
          "The escrow pattern enhances security in decentralized exchanges by providing temporary custody of assets during trades. This pattern involves a trusted intermediary contract that holds assets from both parties until the conditions of the trade are met. Once the conditions are satisfied, the escrow contract automatically executes the exchange. This approach reduces counterparty risk and enables more complex trading mechanisms.",
        type: "text",
        explanation: "The escrow pattern is fundamental for building secure decentralized exchanges.",
      },
      {
        title: "State Machine Pattern in Smart Contracts",
        content:
          "The state machine pattern is a powerful approach for managing complex contract logic. It involves defining distinct states that a contract can be in and the valid transitions between these states. This pattern simplifies contract logic, improves readability, and enhances auditability. By clearly defining the possible states and transitions, developers can create more predictable and secure smart contracts.",
        type: "text",
        explanation: "The state machine pattern helps manage complex contract behaviors securely.",
      },

      // Image Content
      {
        title: "Commitment Scheme Pattern Diagram",
        description:
          "This diagram illustrates the stages of a commitment scheme: Commit, Reveal, and Verify. In the Commit phase, a user submits a hashed value. During the Reveal phase, the original value is disclosed. The Verify stage confirms the revealed value matches the initial commitment. This pattern is crucial for applications requiring hidden information, such as sealed-bid auctions or voting systems.",
        type: "image",
        imageUrl: "/icons/commitment-scheme-pattern.png",
        explanation: "Commitment schemes are fundamental for many cryptographic protocols in blockchain.",
      },

      // Multiple Choice Questions
      {
        question: "Which design pattern is commonly used for upgradeability in Aptos smart contracts?",
        options: ["Proxy pattern", "Singleton pattern", "Factory pattern", "Observer pattern"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "The proxy pattern is widely used for implementing upgradeability in smart contracts.",
      },
      {
        question: "How does the 'escrow pattern' enhance security in decentralized exchanges?",
        options: [
          "By centralizing all funds",
          "Through temporary custody of assets during trades",
          "By eliminating the need for smart contracts",
          "Through permanent locking of assets",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "The escrow pattern provides secure temporary custody during trades.",
      },
      {
        question: "What is the primary benefit of implementing the 'state machine pattern' in smart contracts?",
        options: [
          "Reduced gas costs",
          "Simplified logic and improved auditability",
          "Increased contract size",
          "Removal of all state transitions",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "The state machine pattern improves contract clarity and security.",
      },
    ],

    level4: [
      // Educational Text Content
      {
        title: "Gas Optimization Techniques in Smart Contracts",
        content:
          "Optimizing gas usage is crucial for creating efficient and cost-effective smart contracts. One effective technique is loop unrolling, which can significantly reduce gas costs in loops. This involves replacing a loop with a sequence of similar independent statements. Other optimization techniques include minimizing storage operations, using events instead of storage for logs, and leveraging off-chain computation where possible.",
        type: "text",
        explanation: "Gas optimization is essential for creating efficient and user-friendly dApps.",
      },
      {
        title: "Off-Chain Computation, On-Chain Verification Pattern",
        content:
          "The 'off-chain computation, on-chain verification' pattern improves scalability by reducing the computational load on the blockchain. This approach involves performing complex calculations off-chain and then submitting the results to the blockchain for verification. The on-chain component only needs to verify the correctness of the result, which is typically much less computationally intensive than performing the entire calculation.",
        type: "text",
        explanation: "This pattern is crucial for building scalable decentralized applications.",
      },
      {
        title: "Incremental Merkle Trees for Scalable Data Management",
        content:
          "Incremental Merkle trees are a gas-efficient solution for managing large datasets in smart contracts. This data structure allows for efficient updates and proofs for large datasets. In an incremental Merkle tree, only the changed branches are recalculated upon updates, significantly reducing gas costs for operations on large datasets. The root hash serves as a compact representation of the entire dataset, enabling efficient verification of data integrity and membership proofs.",
        type: "text",
        explanation: "Efficient data structures are crucial for managing large datasets on-chain.",
      },

      // Image Content
      {
        title: "High-Performance DeFi Protocol Architecture",
        description:
          "This diagram illustrates a layered architecture combining on-chain and off-chain components for a DeFi protocol. It shows how off-chain indexers and relayers interact with on-chain smart contracts to achieve high performance. The architecture includes optimized data structures, batch processing mechanisms, and a hybrid on-chain/off-chain order matching system to balance security with scalability.",
        type: "image",
        imageUrl: "/icons/defi-protocol-architecture.png",
        explanation: "Understanding complex system architectures is crucial for advanced DeFi development.",
      },

      // Multiple Choice Questions
      {
        question: "Which optimization technique is most effective for reducing gas costs in loops?",
        options: ["Unrolling loops", "Increasing loop iterations", "Using nested loops", "Ignoring loop optimization"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Loop unrolling can significantly reduce gas costs in smart contracts.",
      },
      {
        question: "How does the 'off-chain computation, on-chain verification' pattern improve scalability?",
        options: [
          "By moving all computations on-chain",
          "Through reducing the need for blockchain interactions",
          "By increasing on-chain storage usage",
          "Through eliminating off-chain systems",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "This pattern reduces on-chain computational load, improving scalability.",
      },
      {
        question: "Which pattern is most effective for managing large datasets in smart contracts?",
        options: [
          "On-chain Merkle trees",
          "Storing all data directly in contract storage",
          "Ignoring data management",
          "Using only off-chain storage",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Merkle trees provide an efficient way to manage large datasets on-chain.",
      },
    ],
  },

  module2: {
    level1: [
      // Educational Text Content
      {
        title: "Automated Market Maker (AMM) in DeFi",
        content:
          "Automated Market Makers (AMMs) are a cornerstone of decentralized finance (DeFi), enabling trustless and efficient token exchanges. AMMs use mathematical formulas, typically a constant product formula (x * y = k), to determine asset prices. This approach eliminates the need for traditional order books and allows for continuous liquidity. AMMs enable users to trade directly against a liquidity pool, making markets more accessible and reducing reliance on centralized exchanges.",
        type: "text",
        explanation: "Understanding AMM mechanics is fundamental for DeFi development.",
      },
      {
        title: "Impermanent Loss in Liquidity Pools",
        content:
          "Impermanent loss is a phenomenon experienced by liquidity providers in AMM pools. It occurs when the price ratio of pooled assets changes compared to when they were deposited. This can lead to a reduction in the value of the liquidity provider's position compared to simply holding the assets. While fees earned from pool activity can offset this loss, understanding and mitigating impermanent loss is crucial for designing fair and attractive liquidity pools in DeFi protocols.",
        type: "text",
        explanation: "Impermanent loss is a key concept for designing fair and attractive liquidity pools.",
      },
      {
        title: "Flash Loans in DeFi",
        content:
          "Flash loans are a unique feature in DeFi that allow users to borrow large amounts of assets without collateral, provided the loan is repaid within the same transaction. This mechanism enables complex arbitrage, liquidations, and other DeFi operations without requiring significant capital upfront. Flash loans leverage the atomic nature of blockchain transactions, where if the loan isn't repaid, the entire transaction is reverted as if it never happened. This feature has opened up new possibilities for capital efficiency in DeFi.",
        type: "text",
        explanation: "Flash loans enable complex DeFi operations and arbitrage opportunities.",
      },

      // Image Content
      {
        title: "DeFi Protocol Architecture Diagram",
        description:
          "This diagram illustrates the components of a comprehensive DeFi protocol, including liquidity pools, AMM mechanisms, flash loan functionality, and their interactions. It shows how user interactions flow through these components, highlighting the role of smart contracts in managing asset exchanges, providing liquidity, and enabling complex financial operations. Pay attention to how the AMM interacts with liquidity pools and how flash loans are integrated into the overall system architecture.",
        type: "image",
        imageUrl: "/icons/defi-protocol-architecture.png",
        explanation:
          "Visual understanding of DeFi protocol architecture aids in comprehending complex system interactions.",
      },

      // Multiple Choice Questions
      {
        question: "Which component is crucial for implementing an Automated Market Maker (AMM) in DeFi?",
        options: ["Constant product formula", "Central order book", "Human market makers", "Fixed exchange rates"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "The constant product formula is fundamental to AMM functionality in DeFi.",
      },
      {
        question: "How does the concept of 'impermanent loss' affect liquidity providers in AMM pools?",
        options: [
          "It guarantees profits",
          "It can lead to reduced returns compared to simply holding assets",
          "It has no effect on liquidity providers",
          "It only affects borrowers",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Impermanent loss can reduce returns for liquidity providers compared to holding assets.",
      },
      {
        question: "What is the primary purpose of 'flash loans' in DeFi protocols?",
        options: [
          "Long-term borrowing",
          "Instant, uncollateralized loans for arbitrage or liquidations",
          "Permanent asset storage",
          "Slow, high-interest lending",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Flash loans provide instant, uncollateralized loans for complex DeFi operations.",
      },
    ],
    level2: [
      // Educational Text Content
      {
        title: "Atomic Swaps in Cross-Chain Transactions",
        content:
          "Atomic swaps enable trustless exchange of assets between different blockchains. This technology ensures that either both parties receive their exchanged assets, or neither does, eliminating counterparty risk. Atomic swaps typically use hash time-locked contracts (HTLCs) to enforce the atomicity of the exchange. This mechanism is fundamental for enabling decentralized cross-chain trading and enhancing blockchain interoperability.",
        type: "text",
        explanation: "Atomic swaps are fundamental for trustless cross-chain interactions.",
      },
      {
        title: "Bridge Contracts in Cross-Chain Integration",
        content:
          "Bridge contracts play a crucial role in facilitating asset transfers and data sharing between different blockchains. These smart contracts act as intermediaries, locking assets on one chain and minting equivalent representations on another. Bridge contracts implement complex logic to ensure the integrity and security of cross-chain transactions, often involving a network of validators or relayers to confirm the validity of cross-chain events.",
        type: "text",
        explanation: "Bridge contracts are crucial infrastructure for blockchain interoperability.",
      },
      {
        title: "Interledger Protocol for Cross-Chain Operations",
        content:
          "The Interledger Protocol (ILP) is a key technology for enabling packetized payments across diverse ledgers. It creates a standardized way for different payment networks to communicate and route transactions. ILP uses a system of connectors to facilitate payments between various ledgers, cryptocurrencies, and traditional payment systems. This protocol is crucial for creating a seamless web of value transfer across different blockchain networks and financial systems.",
        type: "text",
        explanation: "Understanding interoperability protocols is key for cross-chain development.",
      },

      // Image Content
      {
        title: "Cross-Chain DEX Architecture Diagram",
        description:
          "This diagram illustrates the architecture of a cross-chain decentralized exchange (DEX). It shows the interaction between different blockchain networks, bridge contracts, and liquidity pools. Key components include order matching engines, cross-chain state verification mechanisms, and atomic swap protocols. The diagram highlights how orders are propagated and matched across chains, and how bridge contracts facilitate the final settlement of cross-chain asset transfers.",
        type: "image",
        imageUrl: "/icons/cross-chain-dex-architecture.png",
        explanation: "Understanding complex cross-chain architectures is essential for advanced DeFi development.",
      },

      // Multiple Choice Questions
      {
        question: "What is the primary purpose of atomic swaps in cross-chain transactions?",
        options: [
          "Instant, trustless exchange of assets between different blockchains",
          "Centralized exchange of assets",
          "Permanent locking of assets across chains",
          "Slow, high-fee transfers between chains",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Atomic swaps enable trustless, decentralized cross-chain asset exchanges.",
      },
      {
        question: "What role do bridge contracts play in cross-chain integration?",
        options: [
          "They prevent any cross-chain communication",
          "They facilitate asset transfers and data sharing between different blockchains",
          "They only work within a single blockchain",
          "They replace the need for individual blockchains",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Bridge contracts enable asset and data transfer between different blockchains.",
      },
      {
        question: "How does the Interledger Protocol contribute to cross-chain operations?",
        options: [
          "By creating a single, unified blockchain",
          "Through enabling packetized payments across diverse ledgers",
          "By eliminating the need for multiple cryptocurrencies",
          "Through centralizing all cross-chain transactions",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "The Interledger Protocol enables standardized payments across diverse ledgers and systems.",
      },
    ],

    level3: [
      // Educational Text Content
      {
        title: "Formal Verification in Smart Contract Security",
        content:
          "Formal verification is a rigorous mathematical approach to proving the correctness of smart contract behavior. It involves creating a formal specification of the contract's intended behavior and then using automated theorem provers to verify that the implementation meets this specification. Techniques like model checking are particularly useful for verifying invariants - properties that should always hold true regardless of the contract's state. Formal verification can provide a high degree of assurance about a contract's correctness and security.",
        type: "text",
        explanation: "Formal verification techniques are crucial for ensuring smart contract correctness.",
      },
      {
        title: "Principle of Least Privilege in Smart Contract Security",
        content:
          "The principle of least privilege is a fundamental concept in smart contract security that involves granting the minimum level of access or permissions necessary for each function or user to perform their required tasks. In smart contracts, this principle is applied by carefully designing access control mechanisms, using modifiers to restrict function access, and compartmentalizing contract functionality. By minimizing unnecessary privileges, the potential impact of vulnerabilities or malicious actions can be significantly reduced.",
        type: "text",
        explanation: "Proper access control is fundamental to smart contract security.",
      },
      {
        title: "Invariant Testing in Smart Contract Development",
        content:
          "Invariant testing is a powerful technique for ensuring the correctness of smart contracts by verifying that critical properties hold true across all possible state transitions. This involves defining a set of invariants - conditions that should always be true - and then testing these conditions against a wide range of inputs and state changes. Invariant testing can uncover subtle bugs and edge cases that might be missed by traditional unit testing, providing a higher level of assurance about the contract's behavior under various conditions.",
        type: "text",
        explanation: "Invariant testing is a powerful technique for ensuring contract correctness.",
      },

      // Image Content
      {
        title: "Smart Contract Security Audit Process Diagram",
        description:
          "This diagram illustrates a comprehensive smart contract security audit process. It shows the flow from initial code review, through automated analysis (including static analysis and fuzzing), to manual review and formal verification. Key components highlighted include the threat modeling stage, automated vulnerability scanners, symbolic execution tools, manual code review by security experts, formal verification of critical properties, and the iterative process of fixing and re-verifying. The diagram emphasizes the importance of combining multiple approaches for comprehensive security assurance.",
        type: "image",
        imageUrl: "/icons/smart-contract-audit-process.png",
        explanation: "Understanding comprehensive security processes is crucial for developing robust smart contracts.",
      },

      // Multiple Choice Questions
      {
        question:
          "Which formal verification technique is most suitable for proving the correctness of smart contract invariants?",
        options: ["Model checking", "Random testing", "Informal code review", "Stress testing"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Model checking is particularly effective for verifying invariants in smart contracts.",
      },
      {
        question: "How does the 'principle of least privilege' enhance smart contract security?",
        options: [
          "By granting all users full access",
          "Through minimizing the permissions and access of each contract and user",
          "By removing all access controls",
          "Through maximizing contract complexity",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation:
          "The principle of least privilege enhances security by minimizing unnecessary access and permissions.",
      },
      {
        question: "What is the primary purpose of 'invariant testing' in smart contract development?",
        options: [
          "To make contracts slower",
          "To verify that critical properties hold true across all possible state transitions",
          "To introduce more bugs",
          "To eliminate the need for testing",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation:
          "Invariant testing verifies that critical properties hold true across all possible contract states.",
      },
    ],

    level4: [
      // Educational Text Content
      {
        title: "Gas Optimization Techniques in Smart Contracts",
        content:
          "Gas optimization is crucial for creating efficient and cost-effective smart contracts. Key techniques include storage packing, where multiple variables are packed into a single storage slot to reduce gas costs. Another important strategy is using read-only reentrancy, which allows multiple reads in a single transaction without intermediate writes, significantly reducing gas consumption. Optimizing loop operations, using events instead of storage for logs, and leveraging off-chain computation where possible are also effective gas-saving strategies.",
        type: "text",
        explanation: "Efficient gas usage is crucial for creating user-friendly and cost-effective smart contracts.",
      },
      {
        title: "MEV Protection and Commit-Reveal Schemes",
        content:
          "Miner Extractable Value (MEV) protection is a critical consideration in DeFi protocol design. Commit-reveal schemes are an effective strategy for preventing MEV by hiding transaction intentions until they're irreversibly committed. In this approach, users first submit a cryptographic commitment of their action, followed by a reveal phase where the actual action is disclosed. This two-step process prevents front-running and other MEV exploits by ensuring that transaction details are not visible until it's too late for miners or other parties to take advantage of this information.",
        type: "text",
        explanation: "MEV protection is crucial for fair and manipulation-resistant DeFi protocols.",
      },
      {
        title: "Meta-Transactions for Improved User Experience",
        content:
          "Meta-transactions are an advanced pattern for improving DApp usability and gas efficiency. This architecture allows users to sign messages off-chain and have others submit the actual on-chain transactions. By separating transaction signing from submission, meta-transactions enable scenarios where users can interact with smart contracts without holding the native blockchain token for gas fees. This can significantly lower the barrier to entry for new users and provide a more seamless user experience in decentralized applications.",
        type: "text",
        explanation: "Meta-transactions are an advanced pattern for improving DApp usability and accessibility.",
      },

      // Image Content
      {
        title: "High-Throughput, MEV-Protected Blockchain Architecture",
        description:
          "This diagram illustrates a blockchain architecture designed for high performance and MEV protection. Key features shown include a parallel transaction execution engine, a sophisticated mempool management system with transaction encryption, a fair ordering protocol to prevent validator front-running, Layer 2 scaling solutions integrated into the base layer, advanced gossip protocols for efficient network communication, and a hybrid consensus mechanism balancing throughput and security. The architecture emphasizes how each component contributes to overall system performance and fairness.",
        type: "image",
        imageUrl: "/icons/high-throughput-mev-protected-blockchain.png",
        explanation:
          "Understanding advanced blockchain architectures is crucial for developing high-performance, fair systems.",
      },

      // Multiple Choice Questions
      {
        question: "Which optimization technique is most effective for reducing gas costs in storage operations?",
        options: [
          "Using more storage slots",
          "Packing multiple variables into a single storage slot",
          "Always using separate storage for each variable",
          "Ignoring storage optimization",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Packing multiple variables into a single storage slot significantly reduces gas costs.",
      },
      {
        question: "How do commit-reveal schemes contribute to MEV protection?",
        options: [
          "By increasing MEV opportunities",
          "Through hiding transaction intentions until they're irreversibly committed",
          "By making all transactions public immediately",
          "Through centralizing transaction ordering",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Commit-reveal schemes protect against MEV by hiding transaction details until commitment.",
      },
      {
        question: "What is the primary benefit of using meta-transactions in DApps?",
        options: [
          "Increasing transaction costs",
          "Allowing users to interact with contracts without holding native tokens for gas",
          "Removing the need for smart contracts",
          "Centralizing all transactions",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Meta-transactions allow users to interact with DApps without holding tokens for gas fees.",
      },
    ],
  },
};
