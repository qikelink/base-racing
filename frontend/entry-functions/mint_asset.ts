import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
// Internal utils
import { VITE_MODULE_ADDRESS } from "@/constants";

export type MintAssetArguments = {
  amount: number;
};

export const mintAsset = (args: MintAssetArguments): InputTransactionData => {
  const { amount } = args;
  return {
    data: {
      function: `${VITE_MODULE_ADDRESS}::testing::mint_tokens`,
      functionArguments: [amount],
    },
  };
};
