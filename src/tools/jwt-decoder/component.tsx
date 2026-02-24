"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { Button } from "@/components/ui/button";
import { decodeJwt, type JwtDecoded } from "./processor";

export default function JwtDecoder() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<JwtDecoded | null>(null);
  const [error, setError] = useState("");

  const handleDecode = () => {
    if (!input.trim()) return;
    try {
      setResult(decodeJwt(input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <div className="space-y-4">
      <ToolInput value={input} onChange={setInput} label="JWT Token" placeholder="eyJhbGciOiJIUzI1NiIs..." rows={4} />
      <Button onClick={handleDecode}>Decode JWT</Button>
      {error && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>
      )}
      {result && (
        <div className="space-y-4">
          {result.isExpired && (
            <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              This token is expired (expired at {result.expiresAt})
            </div>
          )}
          {result.expiresAt && !result.isExpired && (
            <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
              Token is valid (expires at {result.expiresAt})
            </div>
          )}
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-emerald-400 mb-1">Header</h3>
              <pre className="p-3 rounded-md border border-gray-800 bg-gray-900 text-sm text-gray-300 font-mono overflow-x-auto">
                {JSON.stringify(result.header, null, 2)}
              </pre>
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-400 mb-1">Payload</h3>
              <pre className="p-3 rounded-md border border-gray-800 bg-gray-900 text-sm text-gray-300 font-mono overflow-x-auto">
                {JSON.stringify(result.payload, null, 2)}
              </pre>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-400 mb-1">Signature</h3>
              <pre className="p-3 rounded-md border border-gray-800 bg-gray-900 text-sm text-gray-300 font-mono overflow-x-auto break-all">
                {result.signature}
              </pre>
            </div>
            {result.issuedAt && (
              <p className="text-xs text-gray-500">Issued at: {result.issuedAt}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
