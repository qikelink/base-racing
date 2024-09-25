import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
// Internal utils
import { MODULE_ADDRESS } from "@/constants";

export type MintAssetArguments = {
  amount: number;
};

export const mintAsset = (args: MintAssetArguments): InputTransactionData => {
  const { amount } = args;
  return {
    data: {
      function: `${MODULE_ADDRESS}::testing::mint_tokens`,
      functionArguments: [amount],
    },
  };
};
