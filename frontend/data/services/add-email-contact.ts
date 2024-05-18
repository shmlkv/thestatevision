"use server";

const SibApiV3Sdk = require("sib-api-v3-typescript");

export async function addEmailContact(email: string) {
  let apiInstance = new SibApiV3Sdk.ContactsApi();

  let apiKey = apiInstance.authentications["apiKey"];

  apiKey.apiKey =
    "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";

  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = email;
  createContact.listIds = [2];

  const res = await apiInstance.createContact(createContact);
  console.log({ res });
  return res;
}
