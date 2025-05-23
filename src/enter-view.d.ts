declare module 'enter-view' {
  interface EnterViewOptions {
    selector: string
    enter?: (element: HTMLElement) => void
    exit?: (element: HTMLElement) => void
    progress?: (element: HTMLElement, progress: number) => void
    offset?: number
    once?: boolean
  }

  function enterView(options: EnterViewOptions): void
  export default enterView
}
