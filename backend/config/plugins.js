module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: "strapi-provider-email-brevo",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultSenderEmail: "hello@futurestate.wiki",
        defaultSenderName: "Future State",
        defaultReplyTo: "hello@futurestate.wiki",
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // "import-export-entries": {
  //   enabled: true,
  //   config: {},
  // },
});
