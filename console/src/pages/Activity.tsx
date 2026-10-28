import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw } from "lucide-react";

const auditLogs = [
  { id: "LOG-109", time: "Just now", event: "PR Review", target: "kushmunjal/codesentinel-test#21", status: "SUCCESS", detail: "Adversarial prompt-injection diff intercepted. Neutral comment posted, approve blocked." },
  { id: "LOG-108", time: "2 mins ago", event: "Issue Triage", target: "kushmunjal/codesentinel-test#26", status: "SKIPPED", detail: "Idempotency hash match. Duplicate triage skipped to conserve LLM tokens." },
  { id: "LOG-107", time: "5 mins ago", event: "PR Review", target: "kushmunjal/codesentinel-test#1", status: "SUCCESS", detail: "Logic bug detected in calculate_discount(). High severity inline finding published." },
  { id: "LOG-106", time: "12 mins ago", event: "Security Scan", target: "kushmunjal/codesentinel-test#6", status: "FLAGGED", detail: "Shannon entropy scan matched high-entropy token (AWS Key). Secret redacted before LLM call." },
  { id: "LOG-105", time: "18 mins ago", event: "PR Review", target: "kushmunjal/codesentinel-test#23", status: "NEUTRAL", detail: "Dependabot / missing API key branch detected. Exited 0 with neutral advisory notice." },
  { id: "LOG-104", time: "25 mins ago", event: "Issue Triage", target: "kushmunjal/codesentinel-test#12", status: "SUCCESS", detail: "Vague bug report analyzed. Automatically requested 3 missing reproduction details." },
  { id: "LOG-103", time: "34 mins ago", event: "SARIF Export", target: "codesentinel.sarif", status: "SUCCESS", detail: "Generated SARIF v2.1.0 report with 4 security rules for GitHub Security Code Scanning." },
  { id: "LOG-102", time: "45 mins ago", event: "Metrics Snapshot", target: "Prometheus", status: "RECORDED", detail: "Avg latency 1.25s, Cache hit rate 42%, Total token budget remaining: 94.2%." },
];

export default function Activity() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Activity & Audit Log</h1>
          <p className="text-muted-foreground mt-1">
            Immutable telemetry ledger tracking pipeline executions, security events, and triage actions.
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary border-primary/20">
          <RefreshCw className="h-3 w-3 animate-spin" />
          Live Telemetry Stream
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Autonomous Pipeline Event Ledger</CardTitle>
          <CardDescription>
            Real-time execution log stored in SQLite WAL database (<code className="text-xs bg-muted px-1 py-0.5 rounded">codesentinel.db</code>)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Audit ID</TableHead>
                <TableHead className="w-[110px]">Timestamp</TableHead>
                <TableHead className="w-[130px]">Event Type</TableHead>
                <TableHead className="w-[240px]">Target Resource</TableHead>
                <TableHead className="w-[110px]">Result</TableHead>
                <TableHead>Execution Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">{log.id}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{log.time}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      {log.event}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">{log.target}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        log.status === "SUCCESS"
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                          : log.status === "FLAGGED"
                          ? "bg-red-500/20 text-red-400 border-red-500/30"
                          : log.status === "SKIPPED"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-muted text-muted-foreground"
                      }
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{log.detail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
