import { MODULE_ADDRESS } from "@/constants";
import { aptosClient } from "@/utils/aptosClient";

export interface MinterData {
  addr: string;
  amount: string;
}

export const getLeadershipBoard = async (): Promise<MinterData[][]> => {
  try {
    const content = await aptosClient().view({
      payload: {
        function: `${MODULE_ADDRESS}::testing::list_all_minters_and_tokens`,
      },
    });
    return [content as MinterData[]];
  } catch (error) {
    console.error(error);
    return [[{ addr: "error", amount: "message not exist" }]];
  }
};
