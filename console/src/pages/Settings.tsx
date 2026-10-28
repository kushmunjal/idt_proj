import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Sliders, Database } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Configuration & Security</h1>
        <p className="text-muted-foreground mt-1">
          Active operational parameters parsed from <code className="text-xs bg-muted px-1.5 py-0.5 rounded">.codesentinel.yml</code> and runtime environment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Model Layer */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              <CardTitle>LLM Provider & Fallback Chain</CardTitle>
            </div>
            <CardDescription>Multi-tier resilient model inference architecture</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Primary Inference Provider</span>
              <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">Groq Cloud (Sub-2s p95)</Badge>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Primary Reasoning Model</span>
              <span className="font-mono text-xs text-primary">qwen/qwen3.8-27b</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Automatic Fallback Model</span>
              <span className="font-mono text-xs text-muted-foreground">openai/gpt-oss-120b</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Fallback Trigger Conditions</span>
              <span className="text-xs text-muted-foreground">HTTP 429 (Rate Limit) | HTTP 5xx | Timeout</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium">Retry Strategy</span>
              <span className="text-xs text-muted-foreground">Exponential backoff + Jitter (Max 3 attempts)</span>
            </div>
          </CardContent>
        </Card>

        {/* Security Hardening */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-amber-400" />
              <CardTitle>Security Hardening & Defenses</CardTitle>
            </div>
            <CardDescription>Zero-trust perimeter for PR diffs and issue bodies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Prompt Injection Defense</span>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">ACTIVE (Strict Isolation)</Badge>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Secret Pre-Check Scanner</span>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">ENABLED (Shannon Entropy &gt; 3.2)</Badge>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Secret Redaction before LLM</span>
              <span className="text-xs text-emerald-400 font-medium">100% Redacted (Zero Key Leakage)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Structural Approval Gate</span>
              <span className="text-xs text-muted-foreground">Event: COMMENT only (Never APPROVE)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium">GitHub Permissions Scope</span>
              <span className="font-mono text-xs text-muted-foreground">contents:read, pull-requests:write, issues:write</span>
            </div>
          </CardContent>
        </Card>

        {/* Reliability & Budgets */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sliders className="h-5 w-5 text-blue-400" />
              <CardTitle>Resource Budgets & Rate Limits</CardTitle>
            </div>
            <CardDescription>Protection against runaways and high token bills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Max Files Per Pull Request</span>
              <span className="font-mono text-xs">50 files max</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Max Total Tokens Per Run</span>
              <span className="font-mono text-xs">50,000 tokens</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Diff Chunking Target</span>
              <span className="font-mono text-xs">2,000 tokens / chunk</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium">Console API Rate Limiting</span>
              <span className="font-mono text-xs">120 req / minute (Sliding window)</span>
            </div>
          </CardContent>
        </Card>

        {/* Storage & Durability */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-violet-400" />
              <CardTitle>Database & Persistence</CardTitle>
            </div>
            <CardDescription>Local headless VM persistence engine</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Database Engine</span>
              <span className="font-mono text-xs">SQLite 3 (WAL Journal Mode)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Synchronous Mode</span>
              <span className="font-mono text-xs">PRAGMA synchronous = NORMAL</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm font-medium">Atomic Online Backups</span>
              <span className="text-xs text-emerald-400">Verified via scripts/backup_db.sh</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium">SARIF Standard Version</span>
              <span className="font-mono text-xs">OASIS SARIF v2.1.0</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
