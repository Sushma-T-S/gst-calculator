"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("");
  const [gstAmount, setGstAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateGST = () => {
    const amt = Number(amount);
    const gstPercent = Number(gst);

    const gstValue = (amt * gstPercent) / 100;
    setGstAmount(gstValue);
    setTotal(amt + gstValue);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full border rounded-lg p-6 shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">
          GST Calculator
        </h1>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 mb-3"
        />

        <input
          type="number"
          placeholder="GST %"
          value={gst}
          onChange={(e) => setGst(e.target.value)}
          className="w-full border p-2 mb-3"
        />

        <button
          onClick={calculateGST}
          className="w-full bg-black text-white p-2 rounded"
        >
          Calculate
        </button>

        <div className="mt-4">
          <p>GST Amount: ₹{gstAmount.toFixed(2)}</p>
          <p>Total Amount: ₹{total.toFixed(2)}</p>
        </div>

        <div className="mt-6">
          <p><strong>Name:</strong> Sushma T S</p>
          <p><strong>Email:</strong>sush2112004@gmail.com</p>
        </div>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          className="block mt-4 text-center underline"
        >
          Built for Digital Heroes
        </a>
      </div>
    </main>
  );
}