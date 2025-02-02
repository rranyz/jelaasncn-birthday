export async function layoutMiddleware(to) {
  try {
    const layout = to.meta.layout
    const layoutComponent = await import(`@/components/layout/${layout}.vue`)
    to.meta.layoutComponent = layoutComponent.default
  } catch (e) {
    const layout = 'Default'
    const layoutComponent = await import(`@/components/layout/${layout}.vue`)
    to.meta.layoutComponent = layoutComponent.default
  }
}
