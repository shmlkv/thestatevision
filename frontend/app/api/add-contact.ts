const SibApiV3Sdk = require("sib-api-v3-typescript");
// pages/api/submit-email.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  // ...
  let apiInstance = new SibApiV3Sdk.ContactsApi();

  let apiKey = apiInstance.authentications["apiKey"];

  apiKey.apiKey =
    "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";

  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = email;
  createContact.listIds = [2];

  const resp = await apiInstance.createContact(createContact);
  console.log({ res });
  return resp;

  return res.status(201).json({ message: "Email submitted successfully" });
}
