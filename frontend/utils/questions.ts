export const questionsByModule = {
  module1: {
    level1: [
      // Introduction to Aptos and Blockchain Basics
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
        question: "What unique feature of Move's type system enhances blockchain asset safety?",
        options: [
          "Dynamic typing",
          "Optional type checking",
          "Resource-oriented programming with linear types",
          "Implicit type conversion",
        ],
        type: "multiple",
        correctOptionIndex: 2,
        explanation: "Move's type system is crucial for secure development.",
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
      {
        question: "Which feature best enables scalable DeFi applications on Aptos?",
        options: [
          "Sequential execution",
          "Parallel execution with automatic conflict resolution",
          "Limited smart contract functionality",
          "Centralized order matching",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Scalability features impact DeFi application design.",
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
        explanation: "Understanding the MoveVM is fundamental.",
      },
      {
        question: "Explain how Aptos achieves high transaction throughput while maintaining safety:",
        description:
          "Block-STM enables parallel execution of transactions by detecting and resolving conflicts automatically. This system optimistically executes transactions in parallel, tracks memory usage, and validates correctness before commitment, ensuring both high throughput and safety.",
        type: "text",
        explanation: "Core architectural understanding is crucial.",
      },
      {
        question: "Study the Aptos execution architecture diagram:",
        description:
          "This diagram shows how Block-STM, parallel execution, and the Move VM interact to enable high-throughput processing while maintaining safety guarantees. Pay attention to the data flow and validation checkpoints.",
        type: "image",
        imageUrl: "/icons/aptos-architecture-level1.png",
        explanation: "Visual understanding of architecture aids development.",
      },
    ],
    level2: [
      // Smart Contract Development Fundamentals
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
        explanation: "Security features are crucial for smart contracts.",
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
        explanation: "Access control patterns impact security.",
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
        explanation: "Formal verification provides strong guarantees.",
      },
      {
        question: "Which pattern best handles state management in Move smart contracts?",
        options: [
          "Global state variables",
          "Resource-based state with controlled access",
          "Unrestricted state modification",
          "No state management",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "State management patterns affect contract safety.",
      },
      {
        question: "How should Move resources be structured for optimal gas efficiency?",
        options: [
          "Using nested resources with minimal storage",
          "Ignoring resource organization",
          "Maximizing storage usage",
          "Avoiding resources entirely",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Resource structure impacts performance.",
      },
      {
        question: "Describe the key considerations when implementing fungible tokens in Move:",
        description:
          "Move's resource safety ensures tokens can't be duplicated or destroyed accidentally. Implementations should consider supply management, transfer restrictions, and proper event emissions while maintaining efficiency.",
        type: "text",
        explanation: "Token implementation requires careful design.",
      },
      {
        question: "Review the Move resource lifecycle diagram:",
        description:
          "This visualization shows how Move resources are created, transferred, and destroyed safely. Understanding this lifecycle is crucial for implementing secure smart contracts.",
        type: "image",
        imageUrl: "/icons/move-resource-lifecycle.png",
        explanation: "Resource lifecycle understanding is fundamental.",
      },
    ],
    level3: [
      // Advanced Contract Patterns
      {
        question: "Which design pattern is commonly used for upgradeability in Aptos smart contracts?",
        options: ["Proxy pattern", "Singleton pattern", "Factory pattern", "Observer pattern"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Upgradeability is crucial for long-term contract maintenance.",
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
        explanation: "Understanding secure trade mechanisms is essential for DeFi development.",
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
        explanation: "State management patterns impact contract clarity and security.",
      },
      {
        question: "How does the 'composability pattern' contribute to DeFi ecosystem growth?",
        options: [
          "By limiting contract interactions",
          "Through enabling contract-to-contract interactions and 'money legos'",
          "By isolating all smart contracts",
          "Through centralized control of all DeFi protocols",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Composability is a key feature for creating complex DeFi systems.",
      },
      {
        question: "Which pattern is best suited for managing complex access control in multi-user contracts?",
        options: [
          "Role-based access control (RBAC)",
          "Single-user authentication",
          "No access control",
          "Centralized authority model",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Proper access control is crucial for secure multi-user systems.",
      },
      {
        question: "Explain how the 'circuit breaker pattern' can be implemented to enhance contract security:",
        description:
          "The circuit breaker pattern involves implementing a mechanism to stop contract execution in case of emergencies. It typically includes three states: Normal, Suspended, and Killed. In the Normal state, all functions operate as usual. In the Suspended state, only specific admin functions and user withdrawals are allowed. The Killed state permanently disables the contract. This pattern helps mitigate risks from unforeseen vulnerabilities or attacks by allowing quick response to threats.",
        type: "text",
        explanation: "Emergency response mechanisms are critical for contract safety.",
      },
      {
        question: "Study the diagram illustrating the 'commitment scheme pattern':",
        description:
          "This diagram shows the stages of a commitment scheme: Commit, Reveal, and Verify. In the Commit phase, a user submits a hashed value. During the Reveal phase, the original value is disclosed. The Verify stage confirms the revealed value matches the initial commitment. This pattern is crucial for applications requiring hidden information, such as sealed-bid auctions or voting systems.",
        type: "image",
        imageUrl: "/icons/commitment-scheme-pattern.png",
        explanation: "Commitment schemes are fundamental for many cryptographic protocols.",
      },
    ],
    level4: [
      // System Design and Optimization
      {
        question: "Which optimization technique is most effective for reducing gas costs in loops?",
        options: ["Unrolling loops", "Increasing loop iterations", "Using nested loops", "Ignoring loop optimization"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Loop optimization is crucial for gas-efficient contracts.",
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
        explanation: "Balancing on-chain and off-chain operations is key to scalability.",
      },
      {
        question: "What is the primary advantage of implementing a 'batch processing' pattern?",
        options: [
          "Increased individual transaction costs",
          "Reduced overall gas costs and improved throughput",
          "Simplified contract logic",
          "Elimination of all batching requirements",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Batch processing can significantly optimize high-volume operations.",
      },
      {
        question: "How does 'lazy evaluation' contribute to contract efficiency?",
        options: [
          "By computing all possible outcomes in advance",
          "Through deferring calculations until absolutely necessary",
          "By increasing immediate computation load",
          "Through removing all calculations",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Lazy evaluation can reduce unnecessary computations and gas costs.",
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
        explanation: "Efficient data structures are crucial for managing large datasets.",
      },
      {
        question:
          "Describe the implementation of a gas-efficient 'incremental Merkle tree' for scalable data management:",
        description:
          "An incremental Merkle tree allows efficient updates and proofs for large datasets. Implementation involves maintaining a dynamic tree structure where only the changed branches are recalculated upon updates. This significantly reduces gas costs for operations on large datasets, as only the necessary hashes are recomputed instead of rebuilding the entire tree. The root hash serves as a compact representation of the entire dataset, enabling efficient verification of data integrity and membership proofs.",
        type: "text",
        explanation: "Merkle trees are fundamental for scalable on-chain data management.",
      },
      {
        question: "Analyze the system architecture diagram for a high-performance DeFi protocol:",
        description:
          "This diagram illustrates a layered architecture combining on-chain and off-chain components for a DeFi protocol. It shows how off-chain indexers and relayers interact with on-chain smart contracts to achieve high performance. The architecture includes optimized data structures, batch processing mechanisms, and a hybrid on-chain/off-chain order matching system to balance security with scalability.",
        type: "image",
        imageUrl: "/icons/defi-protocol-architecture.png",
        explanation: "Understanding complex system architectures is crucial for advanced DeFi development.",
      },
    ],
  },

  module2: {
    level1: [
      // DeFi Protocol Development
      {
        question: "Which component is crucial for implementing an Automated Market Maker (AMM) in DeFi?",
        options: ["Constant product formula", "Central order book", "Human market makers", "Fixed exchange rates"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Understanding AMM mechanics is fundamental for DeFi development.",
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
        explanation: "Impermanent loss is a key concept for designing fair and attractive liquidity pools.",
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
        explanation: "Flash loans enable complex DeFi operations and arbitrage opportunities.",
      },
      {
        question: "How do 'oracles' contribute to the functionality of DeFi protocols?",
        options: [
          "By providing off-chain data to smart contracts",
          "By replacing smart contracts entirely",
          "Through centralized decision making",
          "By eliminating the need for external data",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Oracles are crucial for connecting DeFi protocols with real-world data.",
      },
      {
        question: "What is the primary benefit of implementing 'yield farming' mechanisms in a DeFi protocol?",
        options: [
          "Reduced protocol security",
          "Incentivizing liquidity provision and user engagement",
          "Simplifying smart contract logic",
          "Eliminating the need for governance",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Yield farming can drive liquidity and user adoption in DeFi protocols.",
      },
      {
        question: "Explain the concept and implementation of a 'bonding curve' in token economics:",
        description:
          "A bonding curve is a mathematical curve that defines the relationship between a token's price and its supply. In implementation, it's typically a smart contract that mints new tokens when purchased and burns tokens when sold, with the price determined by the current supply. This creates an automated market maker for the token. The curve's shape (e.g., linear, exponential, logarithmic) affects token economics, influencing factors like price stability and speculation incentives. Implementing a bonding curve involves careful consideration of the curve function, reserve ratios, and potential for manipulation.",
        type: "text",
        explanation: "Bonding curves are advanced token economic models crucial for many DeFi protocols.",
      },
      {
        question: "Analyze the architecture diagram of a comprehensive lending and borrowing protocol:",
        description:
          "This diagram illustrates the components of a DeFi lending protocol, including liquidity pools, interest rate models, collateral management systems, and liquidation mechanisms. Key features shown are the interaction between suppliers, borrowers, and liquidators, as well as the role of price oracles in maintaining system solvency. The architecture emphasizes the importance of efficient capital utilization and risk management in DeFi lending protocols.",
        type: "image",
        imageUrl: "/icons/defi-lending-protocol.png",
        explanation: "Understanding complex DeFi architectures is crucial for advanced protocol development.",
      },
    ],
    level2: [
      // Cross-chain Integration
      {
        question: "Which of the following best describes the purpose of 'atomic swaps' in cross-chain transactions?",
        options: [
          "Instant, trustless exchange of assets between different blockchains",
          "Centralized exchange of assets",
          "Permanent locking of assets across chains",
          "Slow, high-fee transfers between chains",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Atomic swaps are fundamental for trustless cross-chain interactions.",
      },
      {
        question: "What role do 'bridge contracts' play in cross-chain integration?",
        options: [
          "They prevent any cross-chain communication",
          "They facilitate asset transfers and data sharing between different blockchains",
          "They only work within a single blockchain",
          "They replace the need for individual blockchains",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Bridge contracts are crucial infrastructure for blockchain interoperability.",
      },
      {
        question: "How does the 'Interledger Protocol' contribute to cross-chain operations?",
        options: [
          "By creating a single, unified blockchain",
          "Through enabling packetized payments across diverse ledgers",
          "By eliminating the need for multiple cryptocurrencies",
          "Through centralizing all cross-chain transactions",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Understanding interoperability protocols is key for cross-chain development.",
      },
      {
        question: "What is a primary challenge in implementing cross-chain smart contract calls?",
        options: [
          "Ensuring atomicity and consistency across different consensus mechanisms",
          "Eliminating the need for smart contracts",
          "Centralizing all contract logic",
          "Removing the need for consensus",
        ],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Cross-chain smart contract interactions present unique technical challenges.",
      },
      {
        question: "How do 'relay chains' enhance cross-chain interoperability in systems like Polkadot?",
        options: [
          "By eliminating the need for parachains",
          "Through providing shared security and cross-chain message passing",
          "By centralizing all blockchain operations",
          "Through replacing individual blockchain consensus",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Understanding relay chain architectures is important for scalable cross-chain systems.",
      },
      {
        question: "Describe the implementation of a secure cross-chain token bridge:",
        description:
          "A secure cross-chain token bridge typically involves smart contracts on both the source and destination chains, along with a set of validators or relayers. The process begins with locking tokens in a contract on the source chain. Validators then verify this lock and trigger the minting of equivalent tokens on the destination chain. Key security considerations include: 1) Multi-signature or threshold signing for validator actions, 2) Proper handling of differing finality times between chains, 3) Implementing replay protection to prevent double-spending, 4) Ensuring proper reserves and burn mechanisms for maintaining peg, and 5) Implementing emergency pause functions and gradual migration strategies for upgrades.",
        type: "text",
        explanation: "Implementing secure cross-chain bridges is crucial for interoperable blockchain ecosystems.",
      },
      {
        question: "Analyze the diagram illustrating a cross-chain decentralized exchange (DEX) architecture:",
        description:
          "This diagram shows the components of a cross-chain DEX, including order matching engines, liquidity pools on multiple chains, cross-chain state verification mechanisms, and bridge contracts. Key features illustrated are: 1) How orders are propagated and matched across different chains, 2) The role of liquidity pools in facilitating cross-chain swaps, 3) How state proofs are generated and verified to ensure consistency across chains, and 4) The interaction between bridge contracts to finalize cross-chain asset transfers.",
        type: "image",
        imageUrl: "/icons/cross-chain-dex-architecture.png",
        explanation: "Understanding complex cross-chain architectures is essential for advanced DeFi development.",
      },
    ],
    level3: [
      // Security and Formal Verification
      {
        question:
          "Which formal verification technique is most suitable for proving the correctness of smart contract invariants?",
        options: ["Model checking", "Random testing", "Informal code review", "Stress testing"],
        type: "multiple",
        correctOptionIndex: 0,
        explanation: "Formal verification techniques are crucial for ensuring smart contract correctness.",
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
        explanation: "Proper access control is fundamental to smart contract security.",
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
        explanation: "Invariant testing is a powerful technique for ensuring contract correctness.",
      },
      {
        question: "How do 'symbolic execution' tools contribute to smart contract security?",
        options: [
          "By introducing intentional vulnerabilities",
          "Through exploring all possible execution paths to find vulnerabilities",
          "By replacing the need for smart contracts",
          "Through making contracts more complex",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Symbolic execution is an advanced technique for thorough contract analysis.",
      },
      {
        question: "What role does 'formal specification' play in the development of secure smart contracts?",
        options: [
          "It replaces the need for coding",
          "It provides a precise, mathematical description of expected contract behavior",
          "It introduces more ambiguity into development",
          "It eliminates the need for testing",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Formal specifications are crucial for developing provably correct contracts.",
      },
      {
        question: "Explain the process and benefits of using the Coq proof assistant for smart contract verification:",
        description:
          "The Coq proof assistant is a formal proof management system that can be used to mathematically verify the correctness of smart contracts. The process involves: 1) Defining the contract's behavior and properties in Coq's specification language, 2) Writing proofs that demonstrate these properties hold, 3) Using Coq to check the validity of these proofs. Benefits include: a) Rigorous verification of critical properties, b) Ability to prove the absence of certain classes of bugs, c) Generation of machine-checkable proofs that can be independently verified. Challenges include the high expertise required and the time-intensive nature of formal proofs. However, for high-stakes contracts, this level of assurance can be invaluable.",
        type: "text",
        explanation: "Understanding formal verification tools is crucial for developing highly secure contracts.",
      },
      {
        question: "Analyze the diagram showing a comprehensive smart contract security audit process:",
        description:
          "This diagram illustrates a multi-stage security audit process for smart contracts. It shows the flow from initial code review, through automated analysis (including static analysis and fuzzing), to manual review and formal verification. Key components highlighted include: 1) Threat modeling stage, 2) Automated vulnerability scanners, 3) Symbolic execution tools, 4) Manual code review by security experts, 5) Formal verification of critical properties, and 6) Iterative process of fixing and re-verifying. The diagram emphasizes the importance of combining multiple approaches for comprehensive security assurance.",
        type: "image",
        imageUrl: "/icons/smart-contract-audit-process.png",
        explanation: "Understanding comprehensive security processes is crucial for developing robust smart contracts.",
      },
    ],
    level4: [
      // Performance Optimization and MEV Protection
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
        explanation: "Efficient storage use is crucial for gas optimization in smart contracts.",
      },
      {
        question: "How does 'read-only reentrancy' contribute to gas efficiency?",
        options: [
          "By allowing unlimited reentrancy",
          "Through enabling multiple reads in a single transaction without intermediate writes",
          "By increasing the number of storage writes",
          "Through eliminating all reentrancy",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Understanding advanced reentrancy patterns is important for optimization.",
      },
      {
        question: "What is the primary purpose of 'commit-reveal' schemes in preventing MEV (Miner Extractable Value)?",
        options: [
          "To increase MEV opportunities",
          "Through hiding transaction intentions until they're irreversibly committed",
          "By making all transactions public immediately",
          "Through centralizing transaction ordering",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Commit-reveal schemes are crucial for fair and manipulation-resistant protocols.",
      },
      {
        question: "How do 'constant function market makers' (CFMMs) optimize gas usage in DEX contracts?",
        options: [
          "By increasing computational complexity",
          "Through using simple, gas-efficient formulas for price calculations",
          "By removing all price calculations",
          "Through implementing complex order books",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Understanding CFMM design is crucial for building efficient DEX protocols.",
      },
      {
        question:
          "What role does 'meta-transaction' architecture play in improving user experience and gas efficiency?",
        options: [
          "It makes transactions more expensive",
          "Through allowing users to sign messages off-chain and have others submit transactions",
          "By removing the ability to make transactions",
          "Through increasing on-chain computation",
        ],
        type: "multiple",
        correctOptionIndex: 1,
        explanation: "Meta-transactions are an advanced pattern for improving DApp usability.",
      },
      {
        question:
          "Describe the implementation of a gas-efficient, MEV-resistant orderbook for a decentralized exchange:",
        description:
          "A gas-efficient, MEV-resistant orderbook can be implemented using a combination of off-chain order management and on-chain settlement. Key components include: 1) Off-chain order collection and matching engine to reduce on-chain operations, 2) Periodic batch auctions instead of continuous trading to prevent front-running, 3) Use of zero-knowledge proofs to validate off-chain computations without revealing order details, 4) Implementation of a commit-reveal scheme for order submission to prevent last-minute front-running, 5) Gas-optimized on-chain contract for final settlement, using efficient data structures like Merkle trees to prove order validity. This design minimizes on-chain operations while maintaining transparency and resistance to MEV attacks.",
        type: "text",
        explanation: "Balancing efficiency and fairness is crucial for advanced DEX design.",
      },
      {
        question: "Analyze the system architecture diagram for a high-throughput, MEV-protected blockchain:",
        description:
          "This diagram illustrates a blockchain architecture designed for high performance and MEV protection. Key features shown include: 1) A parallel transaction execution engine, 2) A sophisticated mempool management system with transaction encryption, 3) A fair ordering protocol to prevent validator front-running, 4) Layer 2 scaling solutions integrated into the base layer, 5) Advanced gossip protocols for efficient network communication, and 6) A hybrid consensus mechanism balancing throughput and security. The architecture emphasizes how each component contributes to overall system performance and fairness.",
        type: "image",
        imageUrl: "/icons/system_architecture_diagram.png",
        explanation: "This is an image showing the system architecture of a high-throughput, MEV-protected blockchain for better understnding.",
      }
    ],
  },
};
