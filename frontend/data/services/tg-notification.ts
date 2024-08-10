const TOKEN = "7257281148:AAFDVFu17qj8bfIXY8cS8hJoQOZOH_oJyrs"; //process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID = "-1002248294805"; //process.env.NEXT_PUBLIC_TELEGRAM_BOT_CHAT_ID;

export async function tgNotification(message: string) {
  const result = await fetch(
    "https://api.telegram.org/bot" + TOKEN + "/sendMessage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    },
  );
  const data = await result.json();
  return data;
}
