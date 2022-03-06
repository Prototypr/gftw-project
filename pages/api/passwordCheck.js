import { passwordCheckHandler } from "@storyofams/next-password-protect";

export default passwordCheckHandler("protoverse", {
  // Options go here (optional)
  cookieName: "next-password-protect",
});