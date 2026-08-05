# iclaude-mcp

Standalone MCP server for [iclaude](https://github.com/gaojunbin/iclaude).

This is a thin shim package that re-exposes the standalone MCP entrypoint from
[`iclaude`](https://github.com/gaojunbin/iclaude),
so MCP client configs that say `npx iclaude-mcp` work out of the box
without installing the full package first.

## Usage

```bash
npx -y iclaude-mcp
```

Or wire it into your MCP client (Claude Desktop, OpenClaw, Cursor, Codex, etc.):

```json
{
  "mcpServers": {
    "iclaude": {
      "command": "npx",
      "args": ["-y", "iclaude-mcp"]
    }
  }
}
```

This package depends on `iclaude` and forwards to its
`dist/standalone.mjs` entrypoint. If you already have `iclaude`
installed, you can call the same entrypoint directly:

```bash
npx iclaude mcp
```

Both commands do the same thing.

## Why does this package exist?

This package keeps the dedicated standalone MCP UX for iclaude.

## License

Apache-2.0
