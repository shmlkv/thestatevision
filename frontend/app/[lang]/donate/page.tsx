"use client";

import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";

export default function Donate() {
  return (
    <article className="space-y-8 mb-20 dark:bg-black dark:text-gray-50 max-w-[750px]">
      <section className="container p-6 mx-auto space-y-6">
        <h1 className="text-4xl font-semibold">Donate</h1>
        <p>
          We are a community-driven project and we rely on your support to keep
          the project running. If you like what we are doing and want to help
          us, please consider donating to us.
        </p>
        <p>
          All donations will be used to pay for the server costs, domain name,
          and other expenses related to the project. We will also use the funds
          to organize events, workshops, and other activities to help grow the
          community.
        </p>

        <a
          href="https://opencollective.com/thestateme"
          target="_blank"
          className="max-w-full mt-4 w-full group hover:no-underline focus:no-underline dark:bg-gray-900  rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="p-6  font-mono space-y-2 mt-8 relative border rounded border-gray-200 dark:border-gray-800">
            <ArrowUpRight className="absolute top-6 right-6" />
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              OpenCollective
            </h3>

            <div className="flex justify-between items-center">
              <span className="text-xs dark:text-gray-400"></span>
            </div>
            <p className="py-4">
              OpenCollective is a platform that helps communities raise funds
            </p>
          </div>
        </a>
        <p>
          We accept donations via USDT, Bitcoin, and Ethereum. You can donate
          any amount you want, and every donation will be greatly appreciated.
        </p>
        <div className="text-2xl font-semibold">USDT TRC20</div>
        <Input
          type="text"
          placeholder={"TNGXteJvBidAwhhuf5HASbwW3eru8PazK5"}
          value={"TNGXteJvBidAwhhuf5HASbwW3eru8PazK5"}
          className="font-mono"
        />
        <div className="text-2xl font-semibold">ETH</div>
        <Input
          type="text"
          placeholder={"0x309895be42b252cb5aa07eab87162059ef609737"}
          value={"0x309895be42b252cb5aa07eab87162059ef609737"}
          className="font-mono"
        />
        <div className="text-2xl font-semibold">BTC</div>
        <Input
          type="text"
          placeholder={"19TNhV5BEsM5YHKwttkj5y6TicwQmk2mL9"}
          className="font-mono"
          value={"19TNhV5BEsM5YHKwttkj5y6TicwQmk2mL9"}
        />

        <p>
          If you have any questions or need help with donating, please contact
          us at <a href="mailto:a@shmlkv.space">this mail</a>
        </p>
      </section>
    </article>
  );
}
