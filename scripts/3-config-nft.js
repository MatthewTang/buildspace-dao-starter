import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAfbDBE77BC44f765cD01979f2B6b289B6518e53b"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "sandwich badge",
        description: "This NFT will give you access to sandwichDAO!",
        image: readFileSync("scripts/assets/sandwich.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
