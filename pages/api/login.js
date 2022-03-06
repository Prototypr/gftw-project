import { loginHandler } from "@storyofams/next-password-protect";

export default loginHandler("protoverse", {
  // Options go here (optional)
  cookieName: "next-password-protect",
});