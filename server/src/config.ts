export const DEFAULT_GLOB_PATTERN = '**/*@(.sh|.inc|.bash|.command)'

export function getExplainshellEndpoint(): string | null {
  const { EXPLAINSHELL_ENDPOINT } = process.env
  return typeof EXPLAINSHELL_ENDPOINT === 'string' && EXPLAINSHELL_ENDPOINT.trim() !== ''
    ? EXPLAINSHELL_ENDPOINT
    : null
}

export function getGlobPattern(): string {
  const { GLOB_PATTERN } = process.env
  return typeof GLOB_PATTERN === 'string' && GLOB_PATTERN.trim() !== ''
    ? GLOB_PATTERN
    : DEFAULT_GLOB_PATTERN
}

export function getHighlightParsingError(): boolean {
  const { HIGHLIGHT_PARSING_ERRORS } = process.env
  return typeof HIGHLIGHT_PARSING_ERRORS !== 'undefined'
    ? toBoolean(HIGHLIGHT_PARSING_ERRORS)
    : true
}

export function getCompletionBasedOnImports(): boolean {
  const { COMPLETION_BASED_ON_IMPORTS } = process.env
  return typeof COMPLETION_BASED_ON_IMPORTS !== 'undefined'
    ? toBoolean(COMPLETION_BASED_ON_IMPORTS)
    : false
}

const toBoolean = (s: string): boolean => s === 'true' || s === '1'
