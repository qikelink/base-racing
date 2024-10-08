import { VITE_MODULE_ADDRESS } from "@/constants";
import { aptosClient } from "@/utils/aptosClient";

export type TokenBalanceArguments = {
  accountAddress: string;
};

export const getTokenBalance = async (args: TokenBalanceArguments): Promise<number> => {
  const { accountAddress } = args;
  const balance = await aptosClient().view<[number]>({
    payload: {
      function: `${VITE_MODULE_ADDRESS}::testing::get_token_balance`,
      functionArguments: [accountAddress],
    },
  });
  return balance[0];
};
